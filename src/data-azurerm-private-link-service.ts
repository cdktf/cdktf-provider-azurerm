// https://www.terraform.io/docs/providers/azurerm/d/private_link_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPrivateLinkServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service.html#name DataAzurermPrivateLinkService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service.html#resource_group_name DataAzurermPrivateLinkService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service.html#timeouts DataAzurermPrivateLinkService#timeouts}
  */
  readonly timeouts?: DataAzurermPrivateLinkServiceTimeouts;
}
export class DataAzurermPrivateLinkServiceNatIpConfiguration extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary') as any;
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_address_version - computed: true, optional: false, required: false
  public get privateIpAddressVersion() {
    return this.getStringAttribute('private_ip_address_version');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export interface DataAzurermPrivateLinkServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service.html#read DataAzurermPrivateLinkService#read}
  */
  readonly read?: string;
}

function dataAzurermPrivateLinkServiceTimeoutsToTerraform(struct?: DataAzurermPrivateLinkServiceTimeoutsOutputReference | DataAzurermPrivateLinkServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermPrivateLinkServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service.html azurerm_private_link_service}
*/
export class DataAzurermPrivateLinkService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_private_link_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service.html azurerm_private_link_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPrivateLinkServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermPrivateLinkServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_link_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // auto_approval_subscription_ids - computed: true, optional: false, required: false
  public get autoApprovalSubscriptionIds() {
    return this.getListAttribute('auto_approval_subscription_ids');
  }

  // enable_proxy_protocol - computed: true, optional: false, required: false
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_frontend_ip_configuration_ids - computed: true, optional: false, required: false
  public get loadBalancerFrontendIpConfigurationIds() {
    return this.getListAttribute('load_balancer_frontend_ip_configuration_ids');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // nat_ip_configuration - computed: true, optional: false, required: false
  public natIpConfiguration(index: string) {
    return new DataAzurermPrivateLinkServiceNatIpConfiguration(this, 'nat_ip_configuration', index);
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // visibility_subscription_ids - computed: true, optional: false, required: false
  public get visibilitySubscriptionIds() {
    return this.getListAttribute('visibility_subscription_ids');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPrivateLinkServiceTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermPrivateLinkServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermPrivateLinkServiceTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermPrivateLinkServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
