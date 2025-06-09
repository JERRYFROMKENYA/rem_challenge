import React from "react";
import { Card, CardBody, CardFooter, Image, Button, Chip } from "@heroui/react";

import { SkipCardProps, getSkipImageUrl } from "../types";

export const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  selected,
  onSelect,
}) => {
  // Calculate price after VAT
  const priceAfterVat = skip.price_before_vat;
  // * (1 + skip.vat / 100);

  return (
    <Card
      className="w-full max-w-sm mb-1.5 hover:scale-110"
      style={{ margin: "0.5rem" }}
    >
      <CardBody className="overflow-visible p-0 relative pr-2">
        <Image
          alt={`${skip.size} yard skip`}
          className="object-cover rounded-xs h-[200px] relative"
          radius="lg"
          shadow="sm"
          src={getSkipImageUrl(skip.size)}
          width="100%"
        />
        <div
          className="absolute top-1 right-0 z-20 pointer-events-none mx-3"
          style={{
            right: "10px",
          }}
        >
          <Chip
            className="text-sm rounded-lg pointer-events-auto"
            color="primary"
            variant="solid"
          >
            {skip.size} Yards
          </Chip>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-start">
        <div className="flex flex-wrap gap-2 mb-2">
          {!skip.allowed_on_road && (
            <Chip className="text-sm" color="warning" variant="flat">
              Not for Road Use
            </Chip>
          )}
          {skip.allows_heavy_waste && (
            <Chip className="text-sm" color="success" variant="flat">
              Allows Heavy Waste
            </Chip>
          )}
        </div>
        <div
          className="flex justify-between w-full items-start mb-8"
          style={{ marginBottom: "1.5rem" }}
        >
          <div className="mr-4">
            <h4 className="font-bold text-large">{skip.size} Yard Skip</h4>
            <p className="text-small text-default-500">
              {skip.hire_period_days} day hire period
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-bold text-large">£{priceAfterVat.toFixed(2)}</p>
            {/*<p className="text-small text-default-500">inc. VAT</p>*/}
          </div>
        </div>
        <Button
          className="w-full mt-8"
          color={selected ? "success" : "primary"}
          onClick={() => onSelect(skip)}
        >
          {selected ? "Selected" : "Select this skip →"}
        </Button>
      </CardFooter>
    </Card>
  );
};
