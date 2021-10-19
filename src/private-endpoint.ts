// https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#location PrivateEndpoint#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#name PrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#resource_group_name PrivateEndpoint#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#subnet_id PrivateEndpoint#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#tags PrivateEndpoint#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * private_dns_zone_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#private_dns_zone_group PrivateEndpoint#private_dns_zone_group}
  */
  readonly privateDnsZoneGroup?: PrivateEndpointPrivateDnsZoneGroup;
  /**
  * private_service_connection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#private_service_connection PrivateEndpoint#private_service_connection}
  */
  readonly privateServiceConnection: PrivateEndpointPrivateServiceConnection;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#timeouts PrivateEndpoint#timeouts}
  */
  readonly timeouts?: PrivateEndpointTimeouts;
}
export class PrivateEndpointCustomDnsConfigs extends cdktf.ComplexComputedList {

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}
export class PrivateEndpointNetworkInterface extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class PrivateEndpointPrivateDnsZoneConfigsRecordSets extends cdktf.ComplexComputedList {

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class PrivateEndpointPrivateDnsZoneConfigs extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_dns_zone_id - computed: true, optional: false, required: false
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }

  // record_sets - computed: true, optional: false, required: false
  public get recordSets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('record_sets') as any;
  }
}
export interface PrivateEndpointPrivateDnsZoneGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#name PrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#private_dns_zone_ids PrivateEndpoint#private_dns_zone_ids}
  */
  readonly privateDnsZoneIds: string[];
}

function privateEndpointPrivateDnsZoneGroupToTerraform(struct?: PrivateEndpointPrivateDnsZoneGroupOutputReference | PrivateEndpointPrivateDnsZoneGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_dns_zone_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.privateDnsZoneIds),
  }
}

export class PrivateEndpointPrivateDnsZoneGroupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // private_dns_zone_ids - computed: false, optional: false, required: true
  private _privateDnsZoneIds?: string[]; 
  public get privateDnsZoneIds() {
    return this.getListAttribute('private_dns_zone_ids');
  }
  public set privateDnsZoneIds(value: string[]) {
    this._privateDnsZoneIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdsInput() {
    return this._privateDnsZoneIds
  }
}
export interface PrivateEndpointPrivateServiceConnection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#is_manual_connection PrivateEndpoint#is_manual_connection}
  */
  readonly isManualConnection: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#name PrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#private_connection_resource_alias PrivateEndpoint#private_connection_resource_alias}
  */
  readonly privateConnectionResourceAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#private_connection_resource_id PrivateEndpoint#private_connection_resource_id}
  */
  readonly privateConnectionResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#request_message PrivateEndpoint#request_message}
  */
  readonly requestMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#subresource_names PrivateEndpoint#subresource_names}
  */
  readonly subresourceNames?: string[];
}

function privateEndpointPrivateServiceConnectionToTerraform(struct?: PrivateEndpointPrivateServiceConnectionOutputReference | PrivateEndpointPrivateServiceConnection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_manual_connection: cdktf.booleanToTerraform(struct!.isManualConnection),
    name: cdktf.stringToTerraform(struct!.name),
    private_connection_resource_alias: cdktf.stringToTerraform(struct!.privateConnectionResourceAlias),
    private_connection_resource_id: cdktf.stringToTerraform(struct!.privateConnectionResourceId),
    request_message: cdktf.stringToTerraform(struct!.requestMessage),
    subresource_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subresourceNames),
  }
}

export class PrivateEndpointPrivateServiceConnectionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_manual_connection - computed: false, optional: false, required: true
  private _isManualConnection?: boolean | cdktf.IResolvable; 
  public get isManualConnection() {
    return this.getBooleanAttribute('is_manual_connection') as any;
  }
  public set isManualConnection(value: boolean | cdktf.IResolvable) {
    this._isManualConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isManualConnectionInput() {
    return this._isManualConnection
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // private_connection_resource_alias - computed: false, optional: true, required: false
  private _privateConnectionResourceAlias?: string | undefined; 
  public get privateConnectionResourceAlias() {
    return this.getStringAttribute('private_connection_resource_alias');
  }
  public set privateConnectionResourceAlias(value: string | undefined) {
    this._privateConnectionResourceAlias = value;
  }
  public resetPrivateConnectionResourceAlias() {
    this._privateConnectionResourceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionResourceAliasInput() {
    return this._privateConnectionResourceAlias
  }

  // private_connection_resource_id - computed: false, optional: true, required: false
  private _privateConnectionResourceId?: string | undefined; 
  public get privateConnectionResourceId() {
    return this.getStringAttribute('private_connection_resource_id');
  }
  public set privateConnectionResourceId(value: string | undefined) {
    this._privateConnectionResourceId = value;
  }
  public resetPrivateConnectionResourceId() {
    this._privateConnectionResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionResourceIdInput() {
    return this._privateConnectionResourceId
  }

  // request_message - computed: false, optional: true, required: false
  private _requestMessage?: string | undefined; 
  public get requestMessage() {
    return this.getStringAttribute('request_message');
  }
  public set requestMessage(value: string | undefined) {
    this._requestMessage = value;
  }
  public resetRequestMessage() {
    this._requestMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMessageInput() {
    return this._requestMessage
  }

  // subresource_names - computed: false, optional: true, required: false
  private _subresourceNames?: string[] | undefined; 
  public get subresourceNames() {
    return this.getListAttribute('subresource_names');
  }
  public set subresourceNames(value: string[] | undefined) {
    this._subresourceNames = value;
  }
  public resetSubresourceNames() {
    this._subresourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subresourceNamesInput() {
    return this._subresourceNames
  }
}
export interface PrivateEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#create PrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#delete PrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#read PrivateEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html#update PrivateEndpoint#update}
  */
  readonly update?: string;
}

function privateEndpointTimeoutsToTerraform(struct?: PrivateEndpointTimeoutsOutputReference | PrivateEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class PrivateEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html azurerm_private_endpoint}
*/
export class PrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_private_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/private_endpoint.html azurerm_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._privateDnsZoneGroup = config.privateDnsZoneGroup;
    this._privateServiceConnection = config.privateServiceConnection;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_dns_configs - computed: true, optional: false, required: false
  public customDnsConfigs(index: string) {
    return new PrivateEndpointCustomDnsConfigs(this, 'custom_dns_configs', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // network_interface - computed: true, optional: false, required: false
  public networkInterface(index: string) {
    return new PrivateEndpointNetworkInterface(this, 'network_interface', index);
  }

  // private_dns_zone_configs - computed: true, optional: false, required: false
  public privateDnsZoneConfigs(index: string) {
    return new PrivateEndpointPrivateDnsZoneConfigs(this, 'private_dns_zone_configs', index);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // private_dns_zone_group - computed: false, optional: true, required: false
  private _privateDnsZoneGroup?: PrivateEndpointPrivateDnsZoneGroup | undefined; 
  private __privateDnsZoneGroupOutput = new PrivateEndpointPrivateDnsZoneGroupOutputReference(this as any, "private_dns_zone_group", true);
  public get privateDnsZoneGroup() {
    return this.__privateDnsZoneGroupOutput;
  }
  public putPrivateDnsZoneGroup(value: PrivateEndpointPrivateDnsZoneGroup | undefined) {
    this._privateDnsZoneGroup = value;
  }
  public resetPrivateDnsZoneGroup() {
    this._privateDnsZoneGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneGroupInput() {
    return this._privateDnsZoneGroup
  }

  // private_service_connection - computed: false, optional: false, required: true
  private _privateServiceConnection?: PrivateEndpointPrivateServiceConnection; 
  private __privateServiceConnectionOutput = new PrivateEndpointPrivateServiceConnectionOutputReference(this as any, "private_service_connection", true);
  public get privateServiceConnection() {
    return this.__privateServiceConnectionOutput;
  }
  public putPrivateServiceConnection(value: PrivateEndpointPrivateServiceConnection) {
    this._privateServiceConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectionInput() {
    return this._privateServiceConnection
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivateEndpointTimeouts | undefined; 
  private __timeoutsOutput = new PrivateEndpointTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PrivateEndpointTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      private_dns_zone_group: privateEndpointPrivateDnsZoneGroupToTerraform(this._privateDnsZoneGroup),
      private_service_connection: privateEndpointPrivateServiceConnectionToTerraform(this._privateServiceConnection),
      timeouts: privateEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
