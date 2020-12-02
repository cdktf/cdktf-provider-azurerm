// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_network_service_tags.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermNetworkServiceTagsConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly locationFilter?: string;
  readonly service: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermNetworkServiceTagsTimeouts;
}
export interface DataAzurermNetworkServiceTagsTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermNetworkServiceTags extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermNetworkServiceTagsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_service_tags',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._locationFilter = config.locationFilter;
    this._service = config.service;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefixes - computed: true, optional: false, required: false
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // location_filter - computed: false, optional: true, required: false
  private _locationFilter?: string;
  public get locationFilter() {
    return this.getStringAttribute('location_filter');
  }
  public set locationFilter(value: string ) {
    this._locationFilter = value;
  }
  public resetLocationFilter() {
    this._locationFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationFilterInput() {
    return this._locationFilter
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNetworkServiceTagsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermNetworkServiceTagsTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      location_filter: this._locationFilter,
      service: this._service,
      timeouts: this._timeouts,
    };
  }
}
