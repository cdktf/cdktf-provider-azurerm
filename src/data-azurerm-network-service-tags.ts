// https://www.terraform.io/docs/providers/azurerm/d/network_service_tags.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermNetworkServiceTagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_service_tags.html#location DataAzurermNetworkServiceTags#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_service_tags.html#location_filter DataAzurermNetworkServiceTags#location_filter}
  */
  readonly locationFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_service_tags.html#service DataAzurermNetworkServiceTags#service}
  */
  readonly service: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_service_tags.html#timeouts DataAzurermNetworkServiceTags#timeouts}
  */
  readonly timeouts?: DataAzurermNetworkServiceTagsTimeouts;
}
export interface DataAzurermNetworkServiceTagsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/network_service_tags.html#read DataAzurermNetworkServiceTags#read}
  */
  readonly read?: string;
}

function dataAzurermNetworkServiceTagsTimeoutsToTerraform(struct?: DataAzurermNetworkServiceTagsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/network_service_tags.html azurerm_network_service_tags}
*/
export class DataAzurermNetworkServiceTags extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_network_service_tags";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/network_service_tags.html azurerm_network_service_tags} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermNetworkServiceTagsConfig
  */
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

  // ipv4_cidrs - computed: true, optional: false, required: false
  public get ipv4Cidrs() {
    return this.getListAttribute('ipv4_cidrs');
  }

  // ipv6_cidrs - computed: true, optional: false, required: false
  public get ipv6Cidrs() {
    return this.getListAttribute('ipv6_cidrs');
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
      location: cdktf.stringToTerraform(this._location),
      location_filter: cdktf.stringToTerraform(this._locationFilter),
      service: cdktf.stringToTerraform(this._service),
      timeouts: dataAzurermNetworkServiceTagsTimeoutsToTerraform(this._timeouts),
    };
  }
}
