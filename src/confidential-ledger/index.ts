// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfidentialLedgerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#id ConfidentialLedger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#ledger_type ConfidentialLedger#ledger_type}
  */
  readonly ledgerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#location ConfidentialLedger#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#name ConfidentialLedger#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#resource_group_name ConfidentialLedger#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#tags ConfidentialLedger#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * azuread_based_service_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#azuread_based_service_principal ConfidentialLedger#azuread_based_service_principal}
  */
  readonly azureadBasedServicePrincipal: ConfidentialLedgerAzureadBasedServicePrincipal[] | cdktf.IResolvable;
  /**
  * certificate_based_security_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#certificate_based_security_principal ConfidentialLedger#certificate_based_security_principal}
  */
  readonly certificateBasedSecurityPrincipal?: ConfidentialLedgerCertificateBasedSecurityPrincipal[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#timeouts ConfidentialLedger#timeouts}
  */
  readonly timeouts?: ConfidentialLedgerTimeouts;
}
export interface ConfidentialLedgerAzureadBasedServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}
  */
  readonly ledgerRoleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#principal_id ConfidentialLedger#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#tenant_id ConfidentialLedger#tenant_id}
  */
  readonly tenantId: string;
}

export function confidentialLedgerAzureadBasedServicePrincipalToTerraform(struct?: ConfidentialLedgerAzureadBasedServicePrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ledger_role_name: cdktf.stringToTerraform(struct!.ledgerRoleName),
    principal_id: cdktf.stringToTerraform(struct!.principalId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function confidentialLedgerAzureadBasedServicePrincipalToHclTerraform(struct?: ConfidentialLedgerAzureadBasedServicePrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ledger_role_name: {
      value: cdktf.stringToHclTerraform(struct!.ledgerRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_id: {
      value: cdktf.stringToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfidentialLedgerAzureadBasedServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfidentialLedgerAzureadBasedServicePrincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ledgerRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ledgerRoleName = this._ledgerRoleName;
    }
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfidentialLedgerAzureadBasedServicePrincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ledgerRoleName = undefined;
      this._principalId = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ledgerRoleName = value.ledgerRoleName;
      this._principalId = value.principalId;
      this._tenantId = value.tenantId;
    }
  }

  // ledger_role_name - computed: false, optional: false, required: true
  private _ledgerRoleName?: string; 
  public get ledgerRoleName() {
    return this.getStringAttribute('ledger_role_name');
  }
  public set ledgerRoleName(value: string) {
    this._ledgerRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ledgerRoleNameInput() {
    return this._ledgerRoleName;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class ConfidentialLedgerAzureadBasedServicePrincipalList extends cdktf.ComplexList {
  public internalValue? : ConfidentialLedgerAzureadBasedServicePrincipal[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfidentialLedgerAzureadBasedServicePrincipalOutputReference {
    return new ConfidentialLedgerAzureadBasedServicePrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfidentialLedgerCertificateBasedSecurityPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}
  */
  readonly ledgerRoleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#pem_public_key ConfidentialLedger#pem_public_key}
  */
  readonly pemPublicKey: string;
}

export function confidentialLedgerCertificateBasedSecurityPrincipalToTerraform(struct?: ConfidentialLedgerCertificateBasedSecurityPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ledger_role_name: cdktf.stringToTerraform(struct!.ledgerRoleName),
    pem_public_key: cdktf.stringToTerraform(struct!.pemPublicKey),
  }
}


export function confidentialLedgerCertificateBasedSecurityPrincipalToHclTerraform(struct?: ConfidentialLedgerCertificateBasedSecurityPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ledger_role_name: {
      value: cdktf.stringToHclTerraform(struct!.ledgerRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_public_key: {
      value: cdktf.stringToHclTerraform(struct!.pemPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfidentialLedgerCertificateBasedSecurityPrincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ledgerRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ledgerRoleName = this._ledgerRoleName;
    }
    if (this._pemPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemPublicKey = this._pemPublicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfidentialLedgerCertificateBasedSecurityPrincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ledgerRoleName = undefined;
      this._pemPublicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ledgerRoleName = value.ledgerRoleName;
      this._pemPublicKey = value.pemPublicKey;
    }
  }

  // ledger_role_name - computed: false, optional: false, required: true
  private _ledgerRoleName?: string; 
  public get ledgerRoleName() {
    return this.getStringAttribute('ledger_role_name');
  }
  public set ledgerRoleName(value: string) {
    this._ledgerRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ledgerRoleNameInput() {
    return this._ledgerRoleName;
  }

  // pem_public_key - computed: false, optional: false, required: true
  private _pemPublicKey?: string; 
  public get pemPublicKey() {
    return this.getStringAttribute('pem_public_key');
  }
  public set pemPublicKey(value: string) {
    this._pemPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemPublicKeyInput() {
    return this._pemPublicKey;
  }
}

export class ConfidentialLedgerCertificateBasedSecurityPrincipalList extends cdktf.ComplexList {
  public internalValue? : ConfidentialLedgerCertificateBasedSecurityPrincipal[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference {
    return new ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfidentialLedgerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#create ConfidentialLedger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#delete ConfidentialLedger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#read ConfidentialLedger#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#update ConfidentialLedger#update}
  */
  readonly update?: string;
}

export function confidentialLedgerTimeoutsToTerraform(struct?: ConfidentialLedgerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function confidentialLedgerTimeoutsToHclTerraform(struct?: ConfidentialLedgerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfidentialLedgerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfidentialLedgerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfidentialLedgerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger azurerm_confidential_ledger}
*/
export class ConfidentialLedger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_confidential_ledger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfidentialLedger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfidentialLedger to import
  * @param importFromId The id of the existing ConfidentialLedger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfidentialLedger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_confidential_ledger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/confidential_ledger azurerm_confidential_ledger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfidentialLedgerConfig
  */
  public constructor(scope: Construct, id: string, config: ConfidentialLedgerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_confidential_ledger',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ledgerType = config.ledgerType;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._azureadBasedServicePrincipal.internalValue = config.azureadBasedServicePrincipal;
    this._certificateBasedSecurityPrincipal.internalValue = config.certificateBasedSecurityPrincipal;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_service_endpoint - computed: true, optional: false, required: false
  public get identityServiceEndpoint() {
    return this.getStringAttribute('identity_service_endpoint');
  }

  // ledger_endpoint - computed: true, optional: false, required: false
  public get ledgerEndpoint() {
    return this.getStringAttribute('ledger_endpoint');
  }

  // ledger_type - computed: false, optional: false, required: true
  private _ledgerType?: string; 
  public get ledgerType() {
    return this.getStringAttribute('ledger_type');
  }
  public set ledgerType(value: string) {
    this._ledgerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ledgerTypeInput() {
    return this._ledgerType;
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
    return this._location;
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
    return this._name;
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
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // azuread_based_service_principal - computed: false, optional: false, required: true
  private _azureadBasedServicePrincipal = new ConfidentialLedgerAzureadBasedServicePrincipalList(this, "azuread_based_service_principal", false);
  public get azureadBasedServicePrincipal() {
    return this._azureadBasedServicePrincipal;
  }
  public putAzureadBasedServicePrincipal(value: ConfidentialLedgerAzureadBasedServicePrincipal[] | cdktf.IResolvable) {
    this._azureadBasedServicePrincipal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureadBasedServicePrincipalInput() {
    return this._azureadBasedServicePrincipal.internalValue;
  }

  // certificate_based_security_principal - computed: false, optional: true, required: false
  private _certificateBasedSecurityPrincipal = new ConfidentialLedgerCertificateBasedSecurityPrincipalList(this, "certificate_based_security_principal", false);
  public get certificateBasedSecurityPrincipal() {
    return this._certificateBasedSecurityPrincipal;
  }
  public putCertificateBasedSecurityPrincipal(value: ConfidentialLedgerCertificateBasedSecurityPrincipal[] | cdktf.IResolvable) {
    this._certificateBasedSecurityPrincipal.internalValue = value;
  }
  public resetCertificateBasedSecurityPrincipal() {
    this._certificateBasedSecurityPrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBasedSecurityPrincipalInput() {
    return this._certificateBasedSecurityPrincipal.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConfidentialLedgerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfidentialLedgerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ledger_type: cdktf.stringToTerraform(this._ledgerType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      azuread_based_service_principal: cdktf.listMapper(confidentialLedgerAzureadBasedServicePrincipalToTerraform, true)(this._azureadBasedServicePrincipal.internalValue),
      certificate_based_security_principal: cdktf.listMapper(confidentialLedgerCertificateBasedSecurityPrincipalToTerraform, true)(this._certificateBasedSecurityPrincipal.internalValue),
      timeouts: confidentialLedgerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ledger_type: {
        value: cdktf.stringToHclTerraform(this._ledgerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      azuread_based_service_principal: {
        value: cdktf.listMapperHcl(confidentialLedgerAzureadBasedServicePrincipalToHclTerraform, true)(this._azureadBasedServicePrincipal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfidentialLedgerAzureadBasedServicePrincipalList",
      },
      certificate_based_security_principal: {
        value: cdktf.listMapperHcl(confidentialLedgerCertificateBasedSecurityPrincipalToHclTerraform, true)(this._certificateBasedSecurityPrincipal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfidentialLedgerCertificateBasedSecurityPrincipalList",
      },
      timeouts: {
        value: confidentialLedgerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfidentialLedgerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
