// https://www.terraform.io/docs/providers/azurerm/d/app_service_certificate_order.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermAppServiceCertificateOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_certificate_order.html#name DataAzurermAppServiceCertificateOrder#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_certificate_order.html#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_certificate_order.html#timeouts DataAzurermAppServiceCertificateOrder#timeouts}
  */
  readonly timeouts?: DataAzurermAppServiceCertificateOrderTimeouts;
}
export class DataAzurermAppServiceCertificateOrderCertificates extends cdktf.ComplexComputedList {

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // key_vault_secret_name - computed: true, optional: false, required: false
  public get keyVaultSecretName() {
    return this.getStringAttribute('key_vault_secret_name');
  }

  // provisioning_state - computed: true, optional: false, required: false
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }
}
export interface DataAzurermAppServiceCertificateOrderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_certificate_order.html#read DataAzurermAppServiceCertificateOrder#read}
  */
  readonly read?: string;
}

function dataAzurermAppServiceCertificateOrderTimeoutsToTerraform(struct?: DataAzurermAppServiceCertificateOrderTimeoutsOutputReference | DataAzurermAppServiceCertificateOrderTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermAppServiceCertificateOrderTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_certificate_order.html azurerm_app_service_certificate_order}
*/
export class DataAzurermAppServiceCertificateOrder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service_certificate_order";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_certificate_order.html azurerm_app_service_certificate_order} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermAppServiceCertificateOrderConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermAppServiceCertificateOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_certificate_order',
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

  // app_service_certificate_not_renewable_reasons - computed: true, optional: false, required: false
  public get appServiceCertificateNotRenewableReasons() {
    return this.getListAttribute('app_service_certificate_not_renewable_reasons');
  }

  // auto_renew - computed: true, optional: false, required: false
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew') as any;
  }

  // certificates - computed: true, optional: false, required: false
  public certificates(index: string) {
    return new DataAzurermAppServiceCertificateOrderCertificates(this, 'certificates', index);
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // distinguished_name - computed: true, optional: false, required: false
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }

  // domain_verification_token - computed: true, optional: false, required: false
  public get domainVerificationToken() {
    return this.getStringAttribute('domain_verification_token');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intermediate_thumbprint - computed: true, optional: false, required: false
  public get intermediateThumbprint() {
    return this.getStringAttribute('intermediate_thumbprint');
  }

  // is_private_key_external - computed: true, optional: false, required: false
  public get isPrivateKeyExternal() {
    return this.getBooleanAttribute('is_private_key_external') as any;
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
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

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
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

  // root_thumbprint - computed: true, optional: false, required: false
  public get rootThumbprint() {
    return this.getStringAttribute('root_thumbprint');
  }

  // signed_certificate_thumbprint - computed: true, optional: false, required: false
  public get signedCertificateThumbprint() {
    return this.getStringAttribute('signed_certificate_thumbprint');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // validity_in_years - computed: true, optional: false, required: false
  public get validityInYears() {
    return this.getNumberAttribute('validity_in_years');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAppServiceCertificateOrderTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermAppServiceCertificateOrderTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermAppServiceCertificateOrderTimeouts | undefined) {
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
      timeouts: dataAzurermAppServiceCertificateOrderTimeoutsToTerraform(this._timeouts),
    };
  }
}
