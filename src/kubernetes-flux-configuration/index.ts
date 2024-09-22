// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesFluxConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}
  */
  readonly continuousReconciliationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}
  */
  readonly scope?: string;
  /**
  * blob_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#blob_storage KubernetesFluxConfiguration#blob_storage}
  */
  readonly blobStorage?: KubernetesFluxConfigurationBlobStorage;
  /**
  * bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#bucket KubernetesFluxConfiguration#bucket}
  */
  readonly bucket?: KubernetesFluxConfigurationBucket;
  /**
  * git_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#git_repository KubernetesFluxConfiguration#git_repository}
  */
  readonly gitRepository?: KubernetesFluxConfigurationGitRepository;
  /**
  * kustomizations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#kustomizations KubernetesFluxConfiguration#kustomizations}
  */
  readonly kustomizations: KubernetesFluxConfigurationKustomizations[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#timeouts KubernetesFluxConfiguration#timeouts}
  */
  readonly timeouts?: KubernetesFluxConfigurationTimeouts;
}
export interface KubernetesFluxConfigurationBlobStorageManagedIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}
  */
  readonly clientId: string;
}

export function kubernetesFluxConfigurationBlobStorageManagedIdentityToTerraform(struct?: KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference | KubernetesFluxConfigurationBlobStorageManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
  }
}


export function kubernetesFluxConfigurationBlobStorageManagedIdentityToHclTerraform(struct?: KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference | KubernetesFluxConfigurationBlobStorageManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesFluxConfigurationBlobStorageManagedIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFluxConfigurationBlobStorageManagedIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }
}
export interface KubernetesFluxConfigurationBlobStorageServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#client_certificate_base64 KubernetesFluxConfiguration#client_certificate_base64}
  */
  readonly clientCertificateBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#client_certificate_password KubernetesFluxConfiguration#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#client_certificate_send_chain KubernetesFluxConfiguration#client_certificate_send_chain}
  */
  readonly clientCertificateSendChain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#client_secret KubernetesFluxConfiguration#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#tenant_id KubernetesFluxConfiguration#tenant_id}
  */
  readonly tenantId: string;
}

export function kubernetesFluxConfigurationBlobStorageServicePrincipalToTerraform(struct?: KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference | KubernetesFluxConfigurationBlobStorageServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_base64: cdktf.stringToTerraform(struct!.clientCertificateBase64),
    client_certificate_password: cdktf.stringToTerraform(struct!.clientCertificatePassword),
    client_certificate_send_chain: cdktf.booleanToTerraform(struct!.clientCertificateSendChain),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function kubernetesFluxConfigurationBlobStorageServicePrincipalToHclTerraform(struct?: KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference | KubernetesFluxConfigurationBlobStorageServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_base64: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_send_chain: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateSendChain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
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

export class KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesFluxConfigurationBlobStorageServicePrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateBase64 = this._clientCertificateBase64;
    }
    if (this._clientCertificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificatePassword = this._clientCertificatePassword;
    }
    if (this._clientCertificateSendChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateSendChain = this._clientCertificateSendChain;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFluxConfigurationBlobStorageServicePrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateBase64 = undefined;
      this._clientCertificatePassword = undefined;
      this._clientCertificateSendChain = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateBase64 = value.clientCertificateBase64;
      this._clientCertificatePassword = value.clientCertificatePassword;
      this._clientCertificateSendChain = value.clientCertificateSendChain;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tenantId = value.tenantId;
    }
  }

  // client_certificate_base64 - computed: false, optional: true, required: false
  private _clientCertificateBase64?: string; 
  public get clientCertificateBase64() {
    return this.getStringAttribute('client_certificate_base64');
  }
  public set clientCertificateBase64(value: string) {
    this._clientCertificateBase64 = value;
  }
  public resetClientCertificateBase64() {
    this._clientCertificateBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateBase64Input() {
    return this._clientCertificateBase64;
  }

  // client_certificate_password - computed: false, optional: true, required: false
  private _clientCertificatePassword?: string; 
  public get clientCertificatePassword() {
    return this.getStringAttribute('client_certificate_password');
  }
  public set clientCertificatePassword(value: string) {
    this._clientCertificatePassword = value;
  }
  public resetClientCertificatePassword() {
    this._clientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePasswordInput() {
    return this._clientCertificatePassword;
  }

  // client_certificate_send_chain - computed: false, optional: true, required: false
  private _clientCertificateSendChain?: boolean | cdktf.IResolvable; 
  public get clientCertificateSendChain() {
    return this.getBooleanAttribute('client_certificate_send_chain');
  }
  public set clientCertificateSendChain(value: boolean | cdktf.IResolvable) {
    this._clientCertificateSendChain = value;
  }
  public resetClientCertificateSendChain() {
    this._clientCertificateSendChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateSendChainInput() {
    return this._clientCertificateSendChain;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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
export interface KubernetesFluxConfigurationBlobStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#account_key KubernetesFluxConfiguration#account_key}
  */
  readonly accountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#container_id KubernetesFluxConfiguration#container_id}
  */
  readonly containerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}
  */
  readonly localAuthReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#sas_token KubernetesFluxConfiguration#sas_token}
  */
  readonly sasToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}
  */
  readonly syncIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * managed_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#managed_identity KubernetesFluxConfiguration#managed_identity}
  */
  readonly managedIdentity?: KubernetesFluxConfigurationBlobStorageManagedIdentity;
  /**
  * service_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#service_principal KubernetesFluxConfiguration#service_principal}
  */
  readonly servicePrincipal?: KubernetesFluxConfigurationBlobStorageServicePrincipal;
}

export function kubernetesFluxConfigurationBlobStorageToTerraform(struct?: KubernetesFluxConfigurationBlobStorageOutputReference | KubernetesFluxConfigurationBlobStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key: cdktf.stringToTerraform(struct!.accountKey),
    container_id: cdktf.stringToTerraform(struct!.containerId),
    local_auth_reference: cdktf.stringToTerraform(struct!.localAuthReference),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
    sync_interval_in_seconds: cdktf.numberToTerraform(struct!.syncIntervalInSeconds),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    managed_identity: kubernetesFluxConfigurationBlobStorageManagedIdentityToTerraform(struct!.managedIdentity),
    service_principal: kubernetesFluxConfigurationBlobStorageServicePrincipalToTerraform(struct!.servicePrincipal),
  }
}


export function kubernetesFluxConfigurationBlobStorageToHclTerraform(struct?: KubernetesFluxConfigurationBlobStorageOutputReference | KubernetesFluxConfigurationBlobStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key: {
      value: cdktf.stringToHclTerraform(struct!.accountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_auth_reference: {
      value: cdktf.stringToHclTerraform(struct!.localAuthReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_token: {
      value: cdktf.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.syncIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_identity: {
      value: kubernetesFluxConfigurationBlobStorageManagedIdentityToHclTerraform(struct!.managedIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesFluxConfigurationBlobStorageManagedIdentityList",
    },
    service_principal: {
      value: kubernetesFluxConfigurationBlobStorageServicePrincipalToHclTerraform(struct!.servicePrincipal),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesFluxConfigurationBlobStorageServicePrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesFluxConfigurationBlobStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesFluxConfigurationBlobStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKey = this._accountKey;
    }
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._localAuthReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAuthReference = this._localAuthReference;
    }
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    if (this._syncIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncIntervalInSeconds = this._syncIntervalInSeconds;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    if (this._managedIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedIdentity = this._managedIdentity?.internalValue;
    }
    if (this._servicePrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipal = this._servicePrincipal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFluxConfigurationBlobStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountKey = undefined;
      this._containerId = undefined;
      this._localAuthReference = undefined;
      this._sasToken = undefined;
      this._syncIntervalInSeconds = undefined;
      this._timeoutInSeconds = undefined;
      this._managedIdentity.internalValue = undefined;
      this._servicePrincipal.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountKey = value.accountKey;
      this._containerId = value.containerId;
      this._localAuthReference = value.localAuthReference;
      this._sasToken = value.sasToken;
      this._syncIntervalInSeconds = value.syncIntervalInSeconds;
      this._timeoutInSeconds = value.timeoutInSeconds;
      this._managedIdentity.internalValue = value.managedIdentity;
      this._servicePrincipal.internalValue = value.servicePrincipal;
    }
  }

  // account_key - computed: false, optional: true, required: false
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  public resetAccountKey() {
    this._accountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

  // container_id - computed: false, optional: false, required: true
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // local_auth_reference - computed: false, optional: true, required: false
  private _localAuthReference?: string; 
  public get localAuthReference() {
    return this.getStringAttribute('local_auth_reference');
  }
  public set localAuthReference(value: string) {
    this._localAuthReference = value;
  }
  public resetLocalAuthReference() {
    this._localAuthReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthReferenceInput() {
    return this._localAuthReference;
  }

  // sas_token - computed: false, optional: true, required: false
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  public resetSasToken() {
    this._sasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }

  // sync_interval_in_seconds - computed: false, optional: true, required: false
  private _syncIntervalInSeconds?: number; 
  public get syncIntervalInSeconds() {
    return this.getNumberAttribute('sync_interval_in_seconds');
  }
  public set syncIntervalInSeconds(value: number) {
    this._syncIntervalInSeconds = value;
  }
  public resetSyncIntervalInSeconds() {
    this._syncIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInSecondsInput() {
    return this._syncIntervalInSeconds;
  }

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // managed_identity - computed: false, optional: true, required: false
  private _managedIdentity = new KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference(this, "managed_identity");
  public get managedIdentity() {
    return this._managedIdentity;
  }
  public putManagedIdentity(value: KubernetesFluxConfigurationBlobStorageManagedIdentity) {
    this._managedIdentity.internalValue = value;
  }
  public resetManagedIdentity() {
    this._managedIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityInput() {
    return this._managedIdentity.internalValue;
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal = new KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference(this, "service_principal");
  public get servicePrincipal() {
    return this._servicePrincipal;
  }
  public putServicePrincipal(value: KubernetesFluxConfigurationBlobStorageServicePrincipal) {
    this._servicePrincipal.internalValue = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal.internalValue;
  }
}
export interface KubernetesFluxConfigurationBucket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#access_key KubernetesFluxConfiguration#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#bucket_name KubernetesFluxConfiguration#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}
  */
  readonly localAuthReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#secret_key_base64 KubernetesFluxConfiguration#secret_key_base64}
  */
  readonly secretKeyBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}
  */
  readonly syncIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#tls_enabled KubernetesFluxConfiguration#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}
  */
  readonly url: string;
}

export function kubernetesFluxConfigurationBucketToTerraform(struct?: KubernetesFluxConfigurationBucketOutputReference | KubernetesFluxConfigurationBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    local_auth_reference: cdktf.stringToTerraform(struct!.localAuthReference),
    secret_key_base64: cdktf.stringToTerraform(struct!.secretKeyBase64),
    sync_interval_in_seconds: cdktf.numberToTerraform(struct!.syncIntervalInSeconds),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    tls_enabled: cdktf.booleanToTerraform(struct!.tlsEnabled),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function kubernetesFluxConfigurationBucketToHclTerraform(struct?: KubernetesFluxConfigurationBucketOutputReference | KubernetesFluxConfigurationBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_auth_reference: {
      value: cdktf.stringToHclTerraform(struct!.localAuthReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_base64: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.syncIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesFluxConfigurationBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesFluxConfigurationBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._localAuthReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAuthReference = this._localAuthReference;
    }
    if (this._secretKeyBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyBase64 = this._secretKeyBase64;
    }
    if (this._syncIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncIntervalInSeconds = this._syncIntervalInSeconds;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    if (this._tlsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnabled = this._tlsEnabled;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFluxConfigurationBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._localAuthReference = undefined;
      this._secretKeyBase64 = undefined;
      this._syncIntervalInSeconds = undefined;
      this._timeoutInSeconds = undefined;
      this._tlsEnabled = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucketName = value.bucketName;
      this._localAuthReference = value.localAuthReference;
      this._secretKeyBase64 = value.secretKeyBase64;
      this._syncIntervalInSeconds = value.syncIntervalInSeconds;
      this._timeoutInSeconds = value.timeoutInSeconds;
      this._tlsEnabled = value.tlsEnabled;
      this._url = value.url;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // local_auth_reference - computed: false, optional: true, required: false
  private _localAuthReference?: string; 
  public get localAuthReference() {
    return this.getStringAttribute('local_auth_reference');
  }
  public set localAuthReference(value: string) {
    this._localAuthReference = value;
  }
  public resetLocalAuthReference() {
    this._localAuthReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthReferenceInput() {
    return this._localAuthReference;
  }

  // secret_key_base64 - computed: false, optional: true, required: false
  private _secretKeyBase64?: string; 
  public get secretKeyBase64() {
    return this.getStringAttribute('secret_key_base64');
  }
  public set secretKeyBase64(value: string) {
    this._secretKeyBase64 = value;
  }
  public resetSecretKeyBase64() {
    this._secretKeyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyBase64Input() {
    return this._secretKeyBase64;
  }

  // sync_interval_in_seconds - computed: false, optional: true, required: false
  private _syncIntervalInSeconds?: number; 
  public get syncIntervalInSeconds() {
    return this.getNumberAttribute('sync_interval_in_seconds');
  }
  public set syncIntervalInSeconds(value: number) {
    this._syncIntervalInSeconds = value;
  }
  public resetSyncIntervalInSeconds() {
    this._syncIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInSecondsInput() {
    return this._syncIntervalInSeconds;
  }

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface KubernetesFluxConfigurationGitRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#https_ca_cert_base64 KubernetesFluxConfiguration#https_ca_cert_base64}
  */
  readonly httpsCaCertBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#https_key_base64 KubernetesFluxConfiguration#https_key_base64}
  */
  readonly httpsKeyBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#https_user KubernetesFluxConfiguration#https_user}
  */
  readonly httpsUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}
  */
  readonly localAuthReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#reference_type KubernetesFluxConfiguration#reference_type}
  */
  readonly referenceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#reference_value KubernetesFluxConfiguration#reference_value}
  */
  readonly referenceValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#ssh_known_hosts_base64 KubernetesFluxConfiguration#ssh_known_hosts_base64}
  */
  readonly sshKnownHostsBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#ssh_private_key_base64 KubernetesFluxConfiguration#ssh_private_key_base64}
  */
  readonly sshPrivateKeyBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}
  */
  readonly syncIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}
  */
  readonly url: string;
}

export function kubernetesFluxConfigurationGitRepositoryToTerraform(struct?: KubernetesFluxConfigurationGitRepositoryOutputReference | KubernetesFluxConfigurationGitRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    https_ca_cert_base64: cdktf.stringToTerraform(struct!.httpsCaCertBase64),
    https_key_base64: cdktf.stringToTerraform(struct!.httpsKeyBase64),
    https_user: cdktf.stringToTerraform(struct!.httpsUser),
    local_auth_reference: cdktf.stringToTerraform(struct!.localAuthReference),
    reference_type: cdktf.stringToTerraform(struct!.referenceType),
    reference_value: cdktf.stringToTerraform(struct!.referenceValue),
    ssh_known_hosts_base64: cdktf.stringToTerraform(struct!.sshKnownHostsBase64),
    ssh_private_key_base64: cdktf.stringToTerraform(struct!.sshPrivateKeyBase64),
    sync_interval_in_seconds: cdktf.numberToTerraform(struct!.syncIntervalInSeconds),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function kubernetesFluxConfigurationGitRepositoryToHclTerraform(struct?: KubernetesFluxConfigurationGitRepositoryOutputReference | KubernetesFluxConfigurationGitRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    https_ca_cert_base64: {
      value: cdktf.stringToHclTerraform(struct!.httpsCaCertBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_key_base64: {
      value: cdktf.stringToHclTerraform(struct!.httpsKeyBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_user: {
      value: cdktf.stringToHclTerraform(struct!.httpsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_auth_reference: {
      value: cdktf.stringToHclTerraform(struct!.localAuthReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_type: {
      value: cdktf.stringToHclTerraform(struct!.referenceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_value: {
      value: cdktf.stringToHclTerraform(struct!.referenceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_known_hosts_base64: {
      value: cdktf.stringToHclTerraform(struct!.sshKnownHostsBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_private_key_base64: {
      value: cdktf.stringToHclTerraform(struct!.sshPrivateKeyBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.syncIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesFluxConfigurationGitRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesFluxConfigurationGitRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpsCaCertBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsCaCertBase64 = this._httpsCaCertBase64;
    }
    if (this._httpsKeyBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKeyBase64 = this._httpsKeyBase64;
    }
    if (this._httpsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsUser = this._httpsUser;
    }
    if (this._localAuthReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAuthReference = this._localAuthReference;
    }
    if (this._referenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceType = this._referenceType;
    }
    if (this._referenceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceValue = this._referenceValue;
    }
    if (this._sshKnownHostsBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKnownHostsBase64 = this._sshKnownHostsBase64;
    }
    if (this._sshPrivateKeyBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKeyBase64 = this._sshPrivateKeyBase64;
    }
    if (this._syncIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncIntervalInSeconds = this._syncIntervalInSeconds;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFluxConfigurationGitRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpsCaCertBase64 = undefined;
      this._httpsKeyBase64 = undefined;
      this._httpsUser = undefined;
      this._localAuthReference = undefined;
      this._referenceType = undefined;
      this._referenceValue = undefined;
      this._sshKnownHostsBase64 = undefined;
      this._sshPrivateKeyBase64 = undefined;
      this._syncIntervalInSeconds = undefined;
      this._timeoutInSeconds = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpsCaCertBase64 = value.httpsCaCertBase64;
      this._httpsKeyBase64 = value.httpsKeyBase64;
      this._httpsUser = value.httpsUser;
      this._localAuthReference = value.localAuthReference;
      this._referenceType = value.referenceType;
      this._referenceValue = value.referenceValue;
      this._sshKnownHostsBase64 = value.sshKnownHostsBase64;
      this._sshPrivateKeyBase64 = value.sshPrivateKeyBase64;
      this._syncIntervalInSeconds = value.syncIntervalInSeconds;
      this._timeoutInSeconds = value.timeoutInSeconds;
      this._url = value.url;
    }
  }

  // https_ca_cert_base64 - computed: false, optional: true, required: false
  private _httpsCaCertBase64?: string; 
  public get httpsCaCertBase64() {
    return this.getStringAttribute('https_ca_cert_base64');
  }
  public set httpsCaCertBase64(value: string) {
    this._httpsCaCertBase64 = value;
  }
  public resetHttpsCaCertBase64() {
    this._httpsCaCertBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsCaCertBase64Input() {
    return this._httpsCaCertBase64;
  }

  // https_key_base64 - computed: false, optional: true, required: false
  private _httpsKeyBase64?: string; 
  public get httpsKeyBase64() {
    return this.getStringAttribute('https_key_base64');
  }
  public set httpsKeyBase64(value: string) {
    this._httpsKeyBase64 = value;
  }
  public resetHttpsKeyBase64() {
    this._httpsKeyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKeyBase64Input() {
    return this._httpsKeyBase64;
  }

  // https_user - computed: false, optional: true, required: false
  private _httpsUser?: string; 
  public get httpsUser() {
    return this.getStringAttribute('https_user');
  }
  public set httpsUser(value: string) {
    this._httpsUser = value;
  }
  public resetHttpsUser() {
    this._httpsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsUserInput() {
    return this._httpsUser;
  }

  // local_auth_reference - computed: false, optional: true, required: false
  private _localAuthReference?: string; 
  public get localAuthReference() {
    return this.getStringAttribute('local_auth_reference');
  }
  public set localAuthReference(value: string) {
    this._localAuthReference = value;
  }
  public resetLocalAuthReference() {
    this._localAuthReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthReferenceInput() {
    return this._localAuthReference;
  }

  // reference_type - computed: false, optional: false, required: true
  private _referenceType?: string; 
  public get referenceType() {
    return this.getStringAttribute('reference_type');
  }
  public set referenceType(value: string) {
    this._referenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTypeInput() {
    return this._referenceType;
  }

  // reference_value - computed: false, optional: false, required: true
  private _referenceValue?: string; 
  public get referenceValue() {
    return this.getStringAttribute('reference_value');
  }
  public set referenceValue(value: string) {
    this._referenceValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceValueInput() {
    return this._referenceValue;
  }

  // ssh_known_hosts_base64 - computed: false, optional: true, required: false
  private _sshKnownHostsBase64?: string; 
  public get sshKnownHostsBase64() {
    return this.getStringAttribute('ssh_known_hosts_base64');
  }
  public set sshKnownHostsBase64(value: string) {
    this._sshKnownHostsBase64 = value;
  }
  public resetSshKnownHostsBase64() {
    this._sshKnownHostsBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKnownHostsBase64Input() {
    return this._sshKnownHostsBase64;
  }

  // ssh_private_key_base64 - computed: false, optional: true, required: false
  private _sshPrivateKeyBase64?: string; 
  public get sshPrivateKeyBase64() {
    return this.getStringAttribute('ssh_private_key_base64');
  }
  public set sshPrivateKeyBase64(value: string) {
    this._sshPrivateKeyBase64 = value;
  }
  public resetSshPrivateKeyBase64() {
    this._sshPrivateKeyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyBase64Input() {
    return this._sshPrivateKeyBase64;
  }

  // sync_interval_in_seconds - computed: false, optional: true, required: false
  private _syncIntervalInSeconds?: number; 
  public get syncIntervalInSeconds() {
    return this.getNumberAttribute('sync_interval_in_seconds');
  }
  public set syncIntervalInSeconds(value: number) {
    this._syncIntervalInSeconds = value;
  }
  public resetSyncIntervalInSeconds() {
    this._syncIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInSecondsInput() {
    return this._syncIntervalInSeconds;
  }

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface KubernetesFluxConfigurationKustomizations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#depends_on KubernetesFluxConfiguration#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#garbage_collection_enabled KubernetesFluxConfiguration#garbage_collection_enabled}
  */
  readonly garbageCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#path KubernetesFluxConfiguration#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#recreating_enabled KubernetesFluxConfiguration#recreating_enabled}
  */
  readonly recreatingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#retry_interval_in_seconds KubernetesFluxConfiguration#retry_interval_in_seconds}
  */
  readonly retryIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}
  */
  readonly syncIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
}

export function kubernetesFluxConfigurationKustomizationsToTerraform(struct?: KubernetesFluxConfigurationKustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    garbage_collection_enabled: cdktf.booleanToTerraform(struct!.garbageCollectionEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    recreating_enabled: cdktf.booleanToTerraform(struct!.recreatingEnabled),
    retry_interval_in_seconds: cdktf.numberToTerraform(struct!.retryIntervalInSeconds),
    sync_interval_in_seconds: cdktf.numberToTerraform(struct!.syncIntervalInSeconds),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
  }
}


export function kubernetesFluxConfigurationKustomizationsToHclTerraform(struct?: KubernetesFluxConfigurationKustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    garbage_collection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.garbageCollectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recreating_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.recreatingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.retryIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.syncIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesFluxConfigurationKustomizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesFluxConfigurationKustomizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._garbageCollectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.garbageCollectionEnabled = this._garbageCollectionEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._recreatingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.recreatingEnabled = this._recreatingEnabled;
    }
    if (this._retryIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryIntervalInSeconds = this._retryIntervalInSeconds;
    }
    if (this._syncIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncIntervalInSeconds = this._syncIntervalInSeconds;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFluxConfigurationKustomizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependsOn = undefined;
      this._garbageCollectionEnabled = undefined;
      this._name = undefined;
      this._path = undefined;
      this._recreatingEnabled = undefined;
      this._retryIntervalInSeconds = undefined;
      this._syncIntervalInSeconds = undefined;
      this._timeoutInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependsOn = value.dependsOn;
      this._garbageCollectionEnabled = value.garbageCollectionEnabled;
      this._name = value.name;
      this._path = value.path;
      this._recreatingEnabled = value.recreatingEnabled;
      this._retryIntervalInSeconds = value.retryIntervalInSeconds;
      this._syncIntervalInSeconds = value.syncIntervalInSeconds;
      this._timeoutInSeconds = value.timeoutInSeconds;
    }
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
  }

  // garbage_collection_enabled - computed: false, optional: true, required: false
  private _garbageCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get garbageCollectionEnabled() {
    return this.getBooleanAttribute('garbage_collection_enabled');
  }
  public set garbageCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._garbageCollectionEnabled = value;
  }
  public resetGarbageCollectionEnabled() {
    this._garbageCollectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get garbageCollectionEnabledInput() {
    return this._garbageCollectionEnabled;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // recreating_enabled - computed: false, optional: true, required: false
  private _recreatingEnabled?: boolean | cdktf.IResolvable; 
  public get recreatingEnabled() {
    return this.getBooleanAttribute('recreating_enabled');
  }
  public set recreatingEnabled(value: boolean | cdktf.IResolvable) {
    this._recreatingEnabled = value;
  }
  public resetRecreatingEnabled() {
    this._recreatingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreatingEnabledInput() {
    return this._recreatingEnabled;
  }

  // retry_interval_in_seconds - computed: false, optional: true, required: false
  private _retryIntervalInSeconds?: number; 
  public get retryIntervalInSeconds() {
    return this.getNumberAttribute('retry_interval_in_seconds');
  }
  public set retryIntervalInSeconds(value: number) {
    this._retryIntervalInSeconds = value;
  }
  public resetRetryIntervalInSeconds() {
    this._retryIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInSecondsInput() {
    return this._retryIntervalInSeconds;
  }

  // sync_interval_in_seconds - computed: false, optional: true, required: false
  private _syncIntervalInSeconds?: number; 
  public get syncIntervalInSeconds() {
    return this.getNumberAttribute('sync_interval_in_seconds');
  }
  public set syncIntervalInSeconds(value: number) {
    this._syncIntervalInSeconds = value;
  }
  public resetSyncIntervalInSeconds() {
    this._syncIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInSecondsInput() {
    return this._syncIntervalInSeconds;
  }

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }
}

export class KubernetesFluxConfigurationKustomizationsList extends cdktf.ComplexList {
  public internalValue? : KubernetesFluxConfigurationKustomizations[] | cdktf.IResolvable

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
  public get(index: number): KubernetesFluxConfigurationKustomizationsOutputReference {
    return new KubernetesFluxConfigurationKustomizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesFluxConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#create KubernetesFluxConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#delete KubernetesFluxConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#read KubernetesFluxConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#update KubernetesFluxConfiguration#update}
  */
  readonly update?: string;
}

export function kubernetesFluxConfigurationTimeoutsToTerraform(struct?: KubernetesFluxConfigurationTimeouts | cdktf.IResolvable): any {
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


export function kubernetesFluxConfigurationTimeoutsToHclTerraform(struct?: KubernetesFluxConfigurationTimeouts | cdktf.IResolvable): any {
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

export class KubernetesFluxConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesFluxConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesFluxConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration azurerm_kubernetes_flux_configuration}
*/
export class KubernetesFluxConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kubernetes_flux_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesFluxConfiguration to import
  * @param importFromId The id of the existing KubernetesFluxConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesFluxConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kubernetes_flux_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_flux_configuration azurerm_kubernetes_flux_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesFluxConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesFluxConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_flux_configuration',
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
    this._clusterId = config.clusterId;
    this._continuousReconciliationEnabled = config.continuousReconciliationEnabled;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._scope = config.scope;
    this._blobStorage.internalValue = config.blobStorage;
    this._bucket.internalValue = config.bucket;
    this._gitRepository.internalValue = config.gitRepository;
    this._kustomizations.internalValue = config.kustomizations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // continuous_reconciliation_enabled - computed: false, optional: true, required: false
  private _continuousReconciliationEnabled?: boolean | cdktf.IResolvable; 
  public get continuousReconciliationEnabled() {
    return this.getBooleanAttribute('continuous_reconciliation_enabled');
  }
  public set continuousReconciliationEnabled(value: boolean | cdktf.IResolvable) {
    this._continuousReconciliationEnabled = value;
  }
  public resetContinuousReconciliationEnabled() {
    this._continuousReconciliationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousReconciliationEnabledInput() {
    return this._continuousReconciliationEnabled;
  }

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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // blob_storage - computed: false, optional: true, required: false
  private _blobStorage = new KubernetesFluxConfigurationBlobStorageOutputReference(this, "blob_storage");
  public get blobStorage() {
    return this._blobStorage;
  }
  public putBlobStorage(value: KubernetesFluxConfigurationBlobStorage) {
    this._blobStorage.internalValue = value;
  }
  public resetBlobStorage() {
    this._blobStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobStorageInput() {
    return this._blobStorage.internalValue;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket = new KubernetesFluxConfigurationBucketOutputReference(this, "bucket");
  public get bucket() {
    return this._bucket;
  }
  public putBucket(value: KubernetesFluxConfigurationBucket) {
    this._bucket.internalValue = value;
  }
  public resetBucket() {
    this._bucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket.internalValue;
  }

  // git_repository - computed: false, optional: true, required: false
  private _gitRepository = new KubernetesFluxConfigurationGitRepositoryOutputReference(this, "git_repository");
  public get gitRepository() {
    return this._gitRepository;
  }
  public putGitRepository(value: KubernetesFluxConfigurationGitRepository) {
    this._gitRepository.internalValue = value;
  }
  public resetGitRepository() {
    this._gitRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryInput() {
    return this._gitRepository.internalValue;
  }

  // kustomizations - computed: false, optional: false, required: true
  private _kustomizations = new KubernetesFluxConfigurationKustomizationsList(this, "kustomizations", true);
  public get kustomizations() {
    return this._kustomizations;
  }
  public putKustomizations(value: KubernetesFluxConfigurationKustomizations[] | cdktf.IResolvable) {
    this._kustomizations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizationsInput() {
    return this._kustomizations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesFluxConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesFluxConfigurationTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      continuous_reconciliation_enabled: cdktf.booleanToTerraform(this._continuousReconciliationEnabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      scope: cdktf.stringToTerraform(this._scope),
      blob_storage: kubernetesFluxConfigurationBlobStorageToTerraform(this._blobStorage.internalValue),
      bucket: kubernetesFluxConfigurationBucketToTerraform(this._bucket.internalValue),
      git_repository: kubernetesFluxConfigurationGitRepositoryToTerraform(this._gitRepository.internalValue),
      kustomizations: cdktf.listMapper(kubernetesFluxConfigurationKustomizationsToTerraform, true)(this._kustomizations.internalValue),
      timeouts: kubernetesFluxConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continuous_reconciliation_enabled: {
        value: cdktf.booleanToHclTerraform(this._continuousReconciliationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blob_storage: {
        value: kubernetesFluxConfigurationBlobStorageToHclTerraform(this._blobStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesFluxConfigurationBlobStorageList",
      },
      bucket: {
        value: kubernetesFluxConfigurationBucketToHclTerraform(this._bucket.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesFluxConfigurationBucketList",
      },
      git_repository: {
        value: kubernetesFluxConfigurationGitRepositoryToHclTerraform(this._gitRepository.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesFluxConfigurationGitRepositoryList",
      },
      kustomizations: {
        value: cdktf.listMapperHcl(kubernetesFluxConfigurationKustomizationsToHclTerraform, true)(this._kustomizations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesFluxConfigurationKustomizationsList",
      },
      timeouts: {
        value: kubernetesFluxConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesFluxConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
