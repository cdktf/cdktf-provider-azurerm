# `azurerm_api_management`

Refer to the Terraform Registory for docs: [`azurerm_api_management`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management).

# `apiManagement` Submodule <a name="`apiManagement` Submodule" id="@cdktf/provider-azurerm.apiManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagement <a name="ApiManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management azurerm_api_management}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagement(scope: Construct, id: string, config: ApiManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig">ApiManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig">ApiManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation">putAdditionalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation">putDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration">putHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols">putProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn">putSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp">putSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess">putTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration">putVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation">resetAdditionalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled">resetClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation">resetDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled">resetGatewayDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration">resetHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion">resetMinApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail">resetNotificationSenderEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId">resetPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity">resetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn">resetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp">resetSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess">resetTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration">resetVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType">resetVirtualNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAdditionalLocation` <a name="putAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation"></a>

```typescript
public putAdditionalLocation(value: IResolvable | ApiManagementAdditionalLocation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>[]

---

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate"></a>

```typescript
public putCertificate(value: IResolvable | ApiManagementCertificate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>[]

---

##### `putDelegation` <a name="putDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation"></a>

```typescript
public putDelegation(value: ApiManagementDelegation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---

##### `putHostnameConfiguration` <a name="putHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration"></a>

```typescript
public putHostnameConfiguration(value: ApiManagementHostnameConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity"></a>

```typescript
public putIdentity(value: ApiManagementIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy"></a>

```typescript
public putPolicy(value: IResolvable | ApiManagementPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>[]

---

##### `putProtocols` <a name="putProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols"></a>

```typescript
public putProtocols(value: ApiManagementProtocols): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity"></a>

```typescript
public putSecurity(value: ApiManagementSecurity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---

##### `putSignIn` <a name="putSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn"></a>

```typescript
public putSignIn(value: ApiManagementSignIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---

##### `putSignUp` <a name="putSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp"></a>

```typescript
public putSignUp(value: ApiManagementSignUp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---

##### `putTenantAccess` <a name="putTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess"></a>

```typescript
public putTenantAccess(value: ApiManagementTenantAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

---

##### `putVirtualNetworkConfiguration` <a name="putVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration"></a>

```typescript
public putVirtualNetworkConfiguration(value: ApiManagementVirtualNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---

##### `resetAdditionalLocation` <a name="resetAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation"></a>

```typescript
public resetAdditionalLocation(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetClientCertificateEnabled` <a name="resetClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled"></a>

```typescript
public resetClientCertificateEnabled(): void
```

##### `resetDelegation` <a name="resetDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation"></a>

```typescript
public resetDelegation(): void
```

##### `resetGatewayDisabled` <a name="resetGatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled"></a>

```typescript
public resetGatewayDisabled(): void
```

##### `resetHostnameConfiguration` <a name="resetHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration"></a>

```typescript
public resetHostnameConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetMinApiVersion` <a name="resetMinApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion"></a>

```typescript
public resetMinApiVersion(): void
```

##### `resetNotificationSenderEmail` <a name="resetNotificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail"></a>

```typescript
public resetNotificationSenderEmail(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetPublicIpAddressId` <a name="resetPublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId"></a>

```typescript
public resetPublicIpAddressId(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity"></a>

```typescript
public resetSecurity(): void
```

##### `resetSignIn` <a name="resetSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn"></a>

```typescript
public resetSignIn(): void
```

##### `resetSignUp` <a name="resetSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp"></a>

```typescript
public resetSignUp(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantAccess` <a name="resetTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess"></a>

```typescript
public resetTenantAccess(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualNetworkConfiguration` <a name="resetVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration"></a>

```typescript
public resetVirtualNetworkConfiguration(): void
```

##### `resetVirtualNetworkType` <a name="resetVirtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType"></a>

```typescript
public resetVirtualNetworkType(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

apiManagement.ApiManagement.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

apiManagement.ApiManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

apiManagement.ApiManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation">additionalLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation">delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl">developerPortalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl">gatewayRegionalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl">gatewayUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration">hostnameConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl">managementApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList">ApiManagementPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl">portalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses">privateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses">publicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl">scmUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp">signUp</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess">tenantAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput">additionalLocationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput">certificateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput">clientCertificateEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput">delegationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput">gatewayDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput">hostnameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput">minApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput">notificationSenderEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policyInput">policyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput">protocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput">publicIpAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput">publisherEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput">publisherNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput">securityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput">signInInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput">signUpInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput">tenantAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput">virtualNetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput">virtualNetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled">gatewayDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion">minApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail">notificationSenderEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId">publicIpAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail">publisherEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName">publisherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType">virtualNetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalLocation`<sup>Required</sup> <a name="additionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation"></a>

```typescript
public readonly additionalLocation: ApiManagementAdditionalLocationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate"></a>

```typescript
public readonly certificate: ApiManagementCertificateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a>

---

##### `delegation`<sup>Required</sup> <a name="delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation"></a>

```typescript
public readonly delegation: ApiManagementDelegationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a>

---

##### `developerPortalUrl`<sup>Required</sup> <a name="developerPortalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl"></a>

```typescript
public readonly developerPortalUrl: string;
```

- *Type:* string

---

##### `gatewayRegionalUrl`<sup>Required</sup> <a name="gatewayRegionalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl"></a>

```typescript
public readonly gatewayRegionalUrl: string;
```

- *Type:* string

---

##### `gatewayUrl`<sup>Required</sup> <a name="gatewayUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl"></a>

```typescript
public readonly gatewayUrl: string;
```

- *Type:* string

---

##### `hostnameConfiguration`<sup>Required</sup> <a name="hostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration"></a>

```typescript
public readonly hostnameConfiguration: ApiManagementHostnameConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity"></a>

```typescript
public readonly identity: ApiManagementIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a>

---

##### `managementApiUrl`<sup>Required</sup> <a name="managementApiUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl"></a>

```typescript
public readonly managementApiUrl: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policy"></a>

```typescript
public readonly policy: ApiManagementPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList">ApiManagementPolicyList</a>

---

##### `portalUrl`<sup>Required</sup> <a name="portalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl"></a>

```typescript
public readonly portalUrl: string;
```

- *Type:* string

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols"></a>

```typescript
public readonly protocols: ApiManagementProtocolsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a>

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses"></a>

```typescript
public readonly publicIpAddresses: string[];
```

- *Type:* string[]

---

##### `scmUrl`<sup>Required</sup> <a name="scmUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl"></a>

```typescript
public readonly scmUrl: string;
```

- *Type:* string

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security"></a>

```typescript
public readonly security: ApiManagementSecurityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a>

---

##### `signIn`<sup>Required</sup> <a name="signIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn"></a>

```typescript
public readonly signIn: ApiManagementSignInOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a>

---

##### `signUp`<sup>Required</sup> <a name="signUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp"></a>

```typescript
public readonly signUp: ApiManagementSignUpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a>

---

##### `tenantAccess`<sup>Required</sup> <a name="tenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess"></a>

```typescript
public readonly tenantAccess: ApiManagementTenantAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a>

---

##### `virtualNetworkConfiguration`<sup>Required</sup> <a name="virtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration"></a>

```typescript
public readonly virtualNetworkConfiguration: ApiManagementVirtualNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a>

---

##### `additionalLocationInput`<sup>Optional</sup> <a name="additionalLocationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput"></a>

```typescript
public readonly additionalLocationInput: IResolvable | ApiManagementAdditionalLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>[]

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput"></a>

```typescript
public readonly certificateInput: IResolvable | ApiManagementCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>[]

---

##### `clientCertificateEnabledInput`<sup>Optional</sup> <a name="clientCertificateEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput"></a>

```typescript
public readonly clientCertificateEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delegationInput`<sup>Optional</sup> <a name="delegationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput"></a>

```typescript
public readonly delegationInput: ApiManagementDelegation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---

##### `gatewayDisabledInput`<sup>Optional</sup> <a name="gatewayDisabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput"></a>

```typescript
public readonly gatewayDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostnameConfigurationInput`<sup>Optional</sup> <a name="hostnameConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput"></a>

```typescript
public readonly hostnameConfigurationInput: ApiManagementHostnameConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput"></a>

```typescript
public readonly identityInput: ApiManagementIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `minApiVersionInput`<sup>Optional</sup> <a name="minApiVersionInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput"></a>

```typescript
public readonly minApiVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationSenderEmailInput`<sup>Optional</sup> <a name="notificationSenderEmailInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput"></a>

```typescript
public readonly notificationSenderEmailInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policyInput"></a>

```typescript
public readonly policyInput: IResolvable | ApiManagementPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>[]

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: ApiManagementProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---

##### `publicIpAddressIdInput`<sup>Optional</sup> <a name="publicIpAddressIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput"></a>

```typescript
public readonly publicIpAddressIdInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publisherEmailInput`<sup>Optional</sup> <a name="publisherEmailInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput"></a>

```typescript
public readonly publisherEmailInput: string;
```

- *Type:* string

---

##### `publisherNameInput`<sup>Optional</sup> <a name="publisherNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput"></a>

```typescript
public readonly publisherNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput"></a>

```typescript
public readonly securityInput: ApiManagementSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---

##### `signInInput`<sup>Optional</sup> <a name="signInInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput"></a>

```typescript
public readonly signInInput: ApiManagementSignIn;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---

##### `signUpInput`<sup>Optional</sup> <a name="signUpInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput"></a>

```typescript
public readonly signUpInput: ApiManagementSignUp;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantAccessInput`<sup>Optional</sup> <a name="tenantAccessInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput"></a>

```typescript
public readonly tenantAccessInput: ApiManagementTenantAccess;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ApiManagementTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a> | cdktf.IResolvable

---

##### `virtualNetworkConfigurationInput`<sup>Optional</sup> <a name="virtualNetworkConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput"></a>

```typescript
public readonly virtualNetworkConfigurationInput: ApiManagementVirtualNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---

##### `virtualNetworkTypeInput`<sup>Optional</sup> <a name="virtualNetworkTypeInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput"></a>

```typescript
public readonly virtualNetworkTypeInput: string;
```

- *Type:* string

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `clientCertificateEnabled`<sup>Required</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled"></a>

```typescript
public readonly clientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayDisabled`<sup>Required</sup> <a name="gatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled"></a>

```typescript
public readonly gatewayDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minApiVersion`<sup>Required</sup> <a name="minApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion"></a>

```typescript
public readonly minApiVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationSenderEmail`<sup>Required</sup> <a name="notificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail"></a>

```typescript
public readonly notificationSenderEmail: string;
```

- *Type:* string

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId"></a>

```typescript
public readonly publicIpAddressId: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publisherEmail`<sup>Required</sup> <a name="publisherEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail"></a>

```typescript
public readonly publisherEmail: string;
```

- *Type:* string

---

##### `publisherName`<sup>Required</sup> <a name="publisherName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName"></a>

```typescript
public readonly publisherName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualNetworkType`<sup>Required</sup> <a name="virtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType"></a>

```typescript
public readonly virtualNetworkType: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementAdditionalLocation <a name="ApiManagementAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementAdditionalLocation: apiManagement.ApiManagementAdditionalLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#capacity ApiManagement#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled">gatewayDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId">publicIpAddressId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#zones ApiManagement#zones}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#location ApiManagement#location}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#capacity ApiManagement#capacity}.

---

##### `gatewayDisabled`<sup>Optional</sup> <a name="gatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled"></a>

```typescript
public readonly gatewayDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `publicIpAddressId`<sup>Optional</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId"></a>

```typescript
public readonly publicIpAddressId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `virtualNetworkConfiguration`<sup>Optional</sup> <a name="virtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration"></a>

```typescript
public readonly virtualNetworkConfiguration: ApiManagementAdditionalLocationVirtualNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#zones ApiManagement#zones}.

---

### ApiManagementAdditionalLocationVirtualNetworkConfiguration <a name="ApiManagementAdditionalLocationVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementAdditionalLocationVirtualNetworkConfiguration: apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}.

---

### ApiManagementCertificate <a name="ApiManagementCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementCertificate: apiManagement.ApiManagementCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate">encodedCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#encoded_certificate ApiManagement#encoded_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName">storeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#store_name ApiManagement#store_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |

---

##### `encodedCertificate`<sup>Required</sup> <a name="encodedCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate"></a>

```typescript
public readonly encodedCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#encoded_certificate ApiManagement#encoded_certificate}.

---

##### `storeName`<sup>Required</sup> <a name="storeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName"></a>

```typescript
public readonly storeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#store_name ApiManagement#store_name}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

### ApiManagementConfig <a name="ApiManagementConfig" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementConfig: apiManagement.ApiManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#name ApiManagement#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail">publisherEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#publisher_email ApiManagement#publisher_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName">publisherName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#publisher_name ApiManagement#publisher_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#sku_name ApiManagement#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation">additionalLocation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>[]</code> | additional_location block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate">certificate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>[]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation">delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | delegation block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled">gatewayDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration">hostnameConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | hostname_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#id ApiManagement#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion">minApiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#min_api_version ApiManagement#min_api_version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail">notificationSenderEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.policy">policy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#policy ApiManagement#policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | protocols block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId">publicIpAddressId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp">signUp</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | sign_up block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tags ApiManagement#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess">tenantAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | tenant_access block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType">virtualNetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#zones ApiManagement#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#location ApiManagement#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#name ApiManagement#name}.

---

##### `publisherEmail`<sup>Required</sup> <a name="publisherEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail"></a>

```typescript
public readonly publisherEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#publisher_email ApiManagement#publisher_email}.

---

##### `publisherName`<sup>Required</sup> <a name="publisherName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName"></a>

```typescript
public readonly publisherName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#publisher_name ApiManagement#publisher_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#sku_name ApiManagement#sku_name}.

---

##### `additionalLocation`<sup>Optional</sup> <a name="additionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation"></a>

```typescript
public readonly additionalLocation: IResolvable | ApiManagementAdditionalLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>[]

additional_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#additional_location ApiManagement#additional_location}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate"></a>

```typescript
public readonly certificate: IResolvable | ApiManagementCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>[]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}

---

##### `clientCertificateEnabled`<sup>Optional</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled"></a>

```typescript
public readonly clientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation"></a>

```typescript
public readonly delegation: ApiManagementDelegation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#delegation ApiManagement#delegation}

---

##### `gatewayDisabled`<sup>Optional</sup> <a name="gatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled"></a>

```typescript
public readonly gatewayDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `hostnameConfiguration`<sup>Optional</sup> <a name="hostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration"></a>

```typescript
public readonly hostnameConfiguration: ApiManagementHostnameConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

hostname_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#hostname_configuration ApiManagement#hostname_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#id ApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity"></a>

```typescript
public readonly identity: ApiManagementIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#identity ApiManagement#identity}

---

##### `minApiVersion`<sup>Optional</sup> <a name="minApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion"></a>

```typescript
public readonly minApiVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#min_api_version ApiManagement#min_api_version}.

---

##### `notificationSenderEmail`<sup>Optional</sup> <a name="notificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail"></a>

```typescript
public readonly notificationSenderEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.policy"></a>

```typescript
public readonly policy: IResolvable | ApiManagementPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#policy ApiManagement#policy}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols"></a>

```typescript
public readonly protocols: ApiManagementProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#protocols ApiManagement#protocols}

---

##### `publicIpAddressId`<sup>Optional</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId"></a>

```typescript
public readonly publicIpAddressId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security"></a>

```typescript
public readonly security: ApiManagementSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#security ApiManagement#security}

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn"></a>

```typescript
public readonly signIn: ApiManagementSignIn;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#sign_in ApiManagement#sign_in}

---

##### `signUp`<sup>Optional</sup> <a name="signUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp"></a>

```typescript
public readonly signUp: ApiManagementSignUp;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

sign_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#sign_up ApiManagement#sign_up}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tags ApiManagement#tags}.

---

##### `tenantAccess`<sup>Optional</sup> <a name="tenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess"></a>

```typescript
public readonly tenantAccess: ApiManagementTenantAccess;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

tenant_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tenant_access ApiManagement#tenant_access}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#timeouts ApiManagement#timeouts}

---

##### `virtualNetworkConfiguration`<sup>Optional</sup> <a name="virtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration"></a>

```typescript
public readonly virtualNetworkConfiguration: ApiManagementVirtualNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `virtualNetworkType`<sup>Optional</sup> <a name="virtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType"></a>

```typescript
public readonly virtualNetworkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#zones ApiManagement#zones}.

---

### ApiManagementDelegation <a name="ApiManagementDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementDelegation: apiManagement.ApiManagementDelegation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled">subscriptionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#url ApiManagement#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled">userRegistrationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#user_registration_enabled ApiManagement#user_registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey">validationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#validation_key ApiManagement#validation_key}. |

---

##### `subscriptionsEnabled`<sup>Optional</sup> <a name="subscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled"></a>

```typescript
public readonly subscriptionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#url ApiManagement#url}.

---

##### `userRegistrationEnabled`<sup>Optional</sup> <a name="userRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled"></a>

```typescript
public readonly userRegistrationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#user_registration_enabled ApiManagement#user_registration_enabled}.

---

##### `validationKey`<sup>Optional</sup> <a name="validationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey"></a>

```typescript
public readonly validationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#validation_key ApiManagement#validation_key}.

---

### ApiManagementHostnameConfiguration <a name="ApiManagementHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementHostnameConfiguration: apiManagement.ApiManagementHostnameConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal">developerPortal</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>[]</code> | developer_portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management">management</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>[]</code> | management block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal">portal</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>[]</code> | portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy">proxy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>[]</code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm">scm</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>[]</code> | scm block. |

---

##### `developerPortal`<sup>Optional</sup> <a name="developerPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal"></a>

```typescript
public readonly developerPortal: IResolvable | ApiManagementHostnameConfigurationDeveloperPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>[]

developer_portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#developer_portal ApiManagement#developer_portal}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management"></a>

```typescript
public readonly management: IResolvable | ApiManagementHostnameConfigurationManagement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>[]

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#management ApiManagement#management}

---

##### `portal`<sup>Optional</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal"></a>

```typescript
public readonly portal: IResolvable | ApiManagementHostnameConfigurationPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>[]

portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#portal ApiManagement#portal}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy"></a>

```typescript
public readonly proxy: IResolvable | ApiManagementHostnameConfigurationProxy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>[]

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#proxy ApiManagement#proxy}

---

##### `scm`<sup>Optional</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm"></a>

```typescript
public readonly scm: IResolvable | ApiManagementHostnameConfigurationScm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>[]

scm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#scm ApiManagement#scm}

---

### ApiManagementHostnameConfigurationDeveloperPortal <a name="ApiManagementHostnameConfigurationDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementHostnameConfigurationDeveloperPortal: apiManagement.ApiManagementHostnameConfigurationDeveloperPortal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationManagement <a name="ApiManagementHostnameConfigurationManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementHostnameConfigurationManagement: apiManagement.ApiManagementHostnameConfigurationManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationPortal <a name="ApiManagementHostnameConfigurationPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementHostnameConfigurationPortal: apiManagement.ApiManagementHostnameConfigurationPortal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationProxy <a name="ApiManagementHostnameConfigurationProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementHostnameConfigurationProxy: apiManagement.ApiManagementHostnameConfigurationProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding">defaultSslBinding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#default_ssl_binding ApiManagement#default_ssl_binding}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `defaultSslBinding`<sup>Optional</sup> <a name="defaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding"></a>

```typescript
public readonly defaultSslBinding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#default_ssl_binding ApiManagement#default_ssl_binding}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationScm <a name="ApiManagementHostnameConfigurationScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementHostnameConfigurationScm: apiManagement.ApiManagementHostnameConfigurationScm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementIdentity <a name="ApiManagementIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementIdentity: apiManagement.ApiManagementIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#type ApiManagement#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#identity_ids ApiManagement#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#type ApiManagement#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#identity_ids ApiManagement#identity_ids}.

---

### ApiManagementPolicy <a name="ApiManagementPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementPolicy: apiManagement.ApiManagementPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlContent">xmlContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#xml_content ApiManagement#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlLink">xmlLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#xml_link ApiManagement#xml_link}. |

---

##### `xmlContent`<sup>Optional</sup> <a name="xmlContent" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlContent"></a>

```typescript
public readonly xmlContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#xml_content ApiManagement#xml_content}.

---

##### `xmlLink`<sup>Optional</sup> <a name="xmlLink" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlLink"></a>

```typescript
public readonly xmlLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#xml_link ApiManagement#xml_link}.

---

### ApiManagementProtocols <a name="ApiManagementProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementProtocols: apiManagement.ApiManagementProtocols = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2">enableHttp2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_http2 ApiManagement#enable_http2}. |

---

##### `enableHttp2`<sup>Optional</sup> <a name="enableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2"></a>

```typescript
public readonly enableHttp2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_http2 ApiManagement#enable_http2}.

---

### ApiManagementSecurity <a name="ApiManagementSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementSecurity: apiManagement.ApiManagementSecurity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30">enableBackendSsl30</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10">enableBackendTls10</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11">enableBackendTls11</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30">enableFrontendSsl30</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10">enableFrontendTls10</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11">enableFrontendTls11</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">tlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">tlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled">tlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled">tlsRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled">tlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled">tlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled">tlsRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled">tlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled">tripleDesCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}. |

---

##### `enableBackendSsl30`<sup>Optional</sup> <a name="enableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30"></a>

```typescript
public readonly enableBackendSsl30: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}.

---

##### `enableBackendTls10`<sup>Optional</sup> <a name="enableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10"></a>

```typescript
public readonly enableBackendTls10: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}.

---

##### `enableBackendTls11`<sup>Optional</sup> <a name="enableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11"></a>

```typescript
public readonly enableBackendTls11: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}.

---

##### `enableFrontendSsl30`<sup>Optional</sup> <a name="enableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30"></a>

```typescript
public readonly enableFrontendSsl30: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}.

---

##### `enableFrontendTls10`<sup>Optional</sup> <a name="enableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10"></a>

```typescript
public readonly enableFrontendTls10: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}.

---

##### `enableFrontendTls11`<sup>Optional</sup> <a name="enableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11"></a>

```typescript
public readonly enableFrontendTls11: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}.

---

##### `tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `tlsEcdheRsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsEcdheRsaWithAes128CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `tlsEcdheRsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsEcdheRsaWithAes256CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `tlsRsaWithAes128CbcSha256CiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes128CbcSha256CiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}.

---

##### `tlsRsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes128CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `tlsRsaWithAes128GcmSha256CiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes128GcmSha256CiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}.

---

##### `tlsRsaWithAes256CbcSha256CiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes256CbcSha256CiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}.

---

##### `tlsRsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes256CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `tlsRsaWithAes256GcmSha384CiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes256GcmSha384CiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}.

---

##### `tripleDesCiphersEnabled`<sup>Optional</sup> <a name="tripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled"></a>

```typescript
public readonly tripleDesCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}.

---

### ApiManagementSignIn <a name="ApiManagementSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementSignIn: apiManagement.ApiManagementSignIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enabled ApiManagement#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementSignUp <a name="ApiManagementSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementSignUp: apiManagement.ApiManagementSignUp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService">termsOfService</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | terms_of_service block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

##### `termsOfService`<sup>Required</sup> <a name="termsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService"></a>

```typescript
public readonly termsOfService: ApiManagementSignUpTermsOfService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

terms_of_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#terms_of_service ApiManagement#terms_of_service}

---

### ApiManagementSignUpTermsOfService <a name="ApiManagementSignUpTermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementSignUpTermsOfService: apiManagement.ApiManagementSignUpTermsOfService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired">consentRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#consent_required ApiManagement#consent_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#text ApiManagement#text}. |

---

##### `consentRequired`<sup>Required</sup> <a name="consentRequired" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired"></a>

```typescript
public readonly consentRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#consent_required ApiManagement#consent_required}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#text ApiManagement#text}.

---

### ApiManagementTenantAccess <a name="ApiManagementTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementTenantAccess: apiManagement.ApiManagementTenantAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enabled ApiManagement#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementTimeouts <a name="ApiManagementTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementTimeouts: apiManagement.ApiManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#create ApiManagement#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#delete ApiManagement#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#read ApiManagement#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#update ApiManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#create ApiManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#delete ApiManagement#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#read ApiManagement#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#update ApiManagement#update}.

---

### ApiManagementVirtualNetworkConfiguration <a name="ApiManagementVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

const apiManagementVirtualNetworkConfiguration: apiManagement.ApiManagementVirtualNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementAdditionalLocationList <a name="ApiManagementAdditionalLocationList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementAdditionalLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get"></a>

```typescript
public get(index: number): ApiManagementAdditionalLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementAdditionalLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>[]

---


### ApiManagementAdditionalLocationOutputReference <a name="ApiManagementAdditionalLocationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementAdditionalLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration">putVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled">resetGatewayDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId">resetPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration">resetVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones">resetZones</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualNetworkConfiguration` <a name="putVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration"></a>

```typescript
public putVirtualNetworkConfiguration(value: ApiManagementAdditionalLocationVirtualNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity"></a>

```typescript
public resetCapacity(): void
```

##### `resetGatewayDisabled` <a name="resetGatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled"></a>

```typescript
public resetGatewayDisabled(): void
```

##### `resetPublicIpAddressId` <a name="resetPublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId"></a>

```typescript
public resetPublicIpAddressId(): void
```

##### `resetVirtualNetworkConfiguration` <a name="resetVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration"></a>

```typescript
public resetVirtualNetworkConfiguration(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones"></a>

```typescript
public resetZones(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl">gatewayRegionalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses">privateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses">publicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput">gatewayDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput">publicIpAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput">virtualNetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled">gatewayDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId">publicIpAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatewayRegionalUrl`<sup>Required</sup> <a name="gatewayRegionalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl"></a>

```typescript
public readonly gatewayRegionalUrl: string;
```

- *Type:* string

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: string[];
```

- *Type:* string[]

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses"></a>

```typescript
public readonly publicIpAddresses: string[];
```

- *Type:* string[]

---

##### `virtualNetworkConfiguration`<sup>Required</sup> <a name="virtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration"></a>

```typescript
public readonly virtualNetworkConfiguration: ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `gatewayDisabledInput`<sup>Optional</sup> <a name="gatewayDisabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput"></a>

```typescript
public readonly gatewayDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `publicIpAddressIdInput`<sup>Optional</sup> <a name="publicIpAddressIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput"></a>

```typescript
public readonly publicIpAddressIdInput: string;
```

- *Type:* string

---

##### `virtualNetworkConfigurationInput`<sup>Optional</sup> <a name="virtualNetworkConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput"></a>

```typescript
public readonly virtualNetworkConfigurationInput: ApiManagementAdditionalLocationVirtualNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `gatewayDisabled`<sup>Required</sup> <a name="gatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled"></a>

```typescript
public readonly gatewayDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId"></a>

```typescript
public readonly publicIpAddressId: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementAdditionalLocation | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a> | cdktf.IResolvable

---


### ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference <a name="ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementAdditionalLocationVirtualNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---


### ApiManagementCertificateList <a name="ApiManagementCertificateList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get"></a>

```typescript
public get(index: number): ApiManagementCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>[]

---


### ApiManagementCertificateOutputReference <a name="ApiManagementCertificateOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput">encodedCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput">storeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate">encodedCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName">storeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `encodedCertificateInput`<sup>Optional</sup> <a name="encodedCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput"></a>

```typescript
public readonly encodedCertificateInput: string;
```

- *Type:* string

---

##### `storeNameInput`<sup>Optional</sup> <a name="storeNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput"></a>

```typescript
public readonly storeNameInput: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `encodedCertificate`<sup>Required</sup> <a name="encodedCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate"></a>

```typescript
public readonly encodedCertificate: string;
```

- *Type:* string

---

##### `storeName`<sup>Required</sup> <a name="storeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName"></a>

```typescript
public readonly storeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementCertificate | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a> | cdktf.IResolvable

---


### ApiManagementDelegationOutputReference <a name="ApiManagementDelegationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementDelegationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled">resetSubscriptionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled">resetUserRegistrationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey">resetValidationKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriptionsEnabled` <a name="resetSubscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled"></a>

```typescript
public resetSubscriptionsEnabled(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUserRegistrationEnabled` <a name="resetUserRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled"></a>

```typescript
public resetUserRegistrationEnabled(): void
```

##### `resetValidationKey` <a name="resetValidationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey"></a>

```typescript
public resetValidationKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput">subscriptionsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput">userRegistrationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput">validationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled">subscriptionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled">userRegistrationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey">validationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subscriptionsEnabledInput`<sup>Optional</sup> <a name="subscriptionsEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput"></a>

```typescript
public readonly subscriptionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userRegistrationEnabledInput`<sup>Optional</sup> <a name="userRegistrationEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput"></a>

```typescript
public readonly userRegistrationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validationKeyInput`<sup>Optional</sup> <a name="validationKeyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput"></a>

```typescript
public readonly validationKeyInput: string;
```

- *Type:* string

---

##### `subscriptionsEnabled`<sup>Required</sup> <a name="subscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled"></a>

```typescript
public readonly subscriptionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userRegistrationEnabled`<sup>Required</sup> <a name="userRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled"></a>

```typescript
public readonly userRegistrationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validationKey`<sup>Required</sup> <a name="validationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey"></a>

```typescript
public readonly validationKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementDelegation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---


### ApiManagementHostnameConfigurationDeveloperPortalList <a name="ApiManagementHostnameConfigurationDeveloperPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get"></a>

```typescript
public get(index: number): ApiManagementHostnameConfigurationDeveloperPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementHostnameConfigurationDeveloperPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>[]

---


### ApiManagementHostnameConfigurationDeveloperPortalOutputReference <a name="ApiManagementHostnameConfigurationDeveloperPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementHostnameConfigurationDeveloperPortal | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a> | cdktf.IResolvable

---


### ApiManagementHostnameConfigurationManagementList <a name="ApiManagementHostnameConfigurationManagementList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationManagementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get"></a>

```typescript
public get(index: number): ApiManagementHostnameConfigurationManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementHostnameConfigurationManagement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>[]

---


### ApiManagementHostnameConfigurationManagementOutputReference <a name="ApiManagementHostnameConfigurationManagementOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementHostnameConfigurationManagement | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a> | cdktf.IResolvable

---


### ApiManagementHostnameConfigurationOutputReference <a name="ApiManagementHostnameConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal">putDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal">putPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy">putProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm">putScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal">resetDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal">resetPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy">resetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm">resetScm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeveloperPortal` <a name="putDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal"></a>

```typescript
public putDeveloperPortal(value: IResolvable | ApiManagementHostnameConfigurationDeveloperPortal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>[]

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement"></a>

```typescript
public putManagement(value: IResolvable | ApiManagementHostnameConfigurationManagement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>[]

---

##### `putPortal` <a name="putPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal"></a>

```typescript
public putPortal(value: IResolvable | ApiManagementHostnameConfigurationPortal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>[]

---

##### `putProxy` <a name="putProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy"></a>

```typescript
public putProxy(value: IResolvable | ApiManagementHostnameConfigurationProxy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>[]

---

##### `putScm` <a name="putScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm"></a>

```typescript
public putScm(value: IResolvable | ApiManagementHostnameConfigurationScm[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>[]

---

##### `resetDeveloperPortal` <a name="resetDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal"></a>

```typescript
public resetDeveloperPortal(): void
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement"></a>

```typescript
public resetManagement(): void
```

##### `resetPortal` <a name="resetPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal"></a>

```typescript
public resetPortal(): void
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy"></a>

```typescript
public resetProxy(): void
```

##### `resetScm` <a name="resetScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm"></a>

```typescript
public resetScm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal">developerPortal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management">management</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal">portal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm">scm</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput">developerPortalInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput">managementInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput">portalInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput">proxyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput">scmInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `developerPortal`<sup>Required</sup> <a name="developerPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal"></a>

```typescript
public readonly developerPortal: ApiManagementHostnameConfigurationDeveloperPortalList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management"></a>

```typescript
public readonly management: ApiManagementHostnameConfigurationManagementList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a>

---

##### `portal`<sup>Required</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal"></a>

```typescript
public readonly portal: ApiManagementHostnameConfigurationPortalList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy"></a>

```typescript
public readonly proxy: ApiManagementHostnameConfigurationProxyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a>

---

##### `scm`<sup>Required</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm"></a>

```typescript
public readonly scm: ApiManagementHostnameConfigurationScmList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a>

---

##### `developerPortalInput`<sup>Optional</sup> <a name="developerPortalInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput"></a>

```typescript
public readonly developerPortalInput: IResolvable | ApiManagementHostnameConfigurationDeveloperPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>[]

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput"></a>

```typescript
public readonly managementInput: IResolvable | ApiManagementHostnameConfigurationManagement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>[]

---

##### `portalInput`<sup>Optional</sup> <a name="portalInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput"></a>

```typescript
public readonly portalInput: IResolvable | ApiManagementHostnameConfigurationPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>[]

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput"></a>

```typescript
public readonly proxyInput: IResolvable | ApiManagementHostnameConfigurationProxy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>[]

---

##### `scmInput`<sup>Optional</sup> <a name="scmInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput"></a>

```typescript
public readonly scmInput: IResolvable | ApiManagementHostnameConfigurationScm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementHostnameConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---


### ApiManagementHostnameConfigurationPortalList <a name="ApiManagementHostnameConfigurationPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationPortalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get"></a>

```typescript
public get(index: number): ApiManagementHostnameConfigurationPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementHostnameConfigurationPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>[]

---


### ApiManagementHostnameConfigurationPortalOutputReference <a name="ApiManagementHostnameConfigurationPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationPortalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementHostnameConfigurationPortal | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a> | cdktf.IResolvable

---


### ApiManagementHostnameConfigurationProxyList <a name="ApiManagementHostnameConfigurationProxyList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationProxyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get"></a>

```typescript
public get(index: number): ApiManagementHostnameConfigurationProxyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementHostnameConfigurationProxy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>[]

---


### ApiManagementHostnameConfigurationProxyOutputReference <a name="ApiManagementHostnameConfigurationProxyOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationProxyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding">resetDefaultSslBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetDefaultSslBinding` <a name="resetDefaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding"></a>

```typescript
public resetDefaultSslBinding(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput">defaultSslBindingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding">defaultSslBinding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `defaultSslBindingInput`<sup>Optional</sup> <a name="defaultSslBindingInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput"></a>

```typescript
public readonly defaultSslBindingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `defaultSslBinding`<sup>Required</sup> <a name="defaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding"></a>

```typescript
public readonly defaultSslBinding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementHostnameConfigurationProxy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a> | cdktf.IResolvable

---


### ApiManagementHostnameConfigurationScmList <a name="ApiManagementHostnameConfigurationScmList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationScmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get"></a>

```typescript
public get(index: number): ApiManagementHostnameConfigurationScmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementHostnameConfigurationScm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>[]

---


### ApiManagementHostnameConfigurationScmOutputReference <a name="ApiManagementHostnameConfigurationScmOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementHostnameConfigurationScmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementHostnameConfigurationScm | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a> | cdktf.IResolvable

---


### ApiManagementIdentityOutputReference <a name="ApiManagementIdentityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---


### ApiManagementPolicyList <a name="ApiManagementPolicyList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get"></a>

```typescript
public get(index: number): ApiManagementPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>[]

---


### ApiManagementPolicyOutputReference <a name="ApiManagementPolicyOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlContent">resetXmlContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlLink">resetXmlLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXmlContent` <a name="resetXmlContent" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlContent"></a>

```typescript
public resetXmlContent(): void
```

##### `resetXmlLink` <a name="resetXmlLink" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlLink"></a>

```typescript
public resetXmlLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContentInput">xmlContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLinkInput">xmlLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContent">xmlContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLink">xmlLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xmlContentInput`<sup>Optional</sup> <a name="xmlContentInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContentInput"></a>

```typescript
public readonly xmlContentInput: string;
```

- *Type:* string

---

##### `xmlLinkInput`<sup>Optional</sup> <a name="xmlLinkInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLinkInput"></a>

```typescript
public readonly xmlLinkInput: string;
```

- *Type:* string

---

##### `xmlContent`<sup>Required</sup> <a name="xmlContent" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContent"></a>

```typescript
public readonly xmlContent: string;
```

- *Type:* string

---

##### `xmlLink`<sup>Required</sup> <a name="xmlLink" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLink"></a>

```typescript
public readonly xmlLink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementPolicy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a> | cdktf.IResolvable

---


### ApiManagementProtocolsOutputReference <a name="ApiManagementProtocolsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementProtocolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2">resetEnableHttp2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableHttp2` <a name="resetEnableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2"></a>

```typescript
public resetEnableHttp2(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input">enableHttp2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2">enableHttp2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableHttp2Input`<sup>Optional</sup> <a name="enableHttp2Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input"></a>

```typescript
public readonly enableHttp2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHttp2`<sup>Required</sup> <a name="enableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2"></a>

```typescript
public readonly enableHttp2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---


### ApiManagementSecurityOutputReference <a name="ApiManagementSecurityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementSecurityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30">resetEnableBackendSsl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10">resetEnableBackendTls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11">resetEnableBackendTls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30">resetEnableFrontendSsl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10">resetEnableFrontendTls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11">resetEnableFrontendTls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled">resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled">resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled">resetTlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled">resetTlsRsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled">resetTlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled">resetTlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled">resetTlsRsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled">resetTlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled">resetTripleDesCiphersEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableBackendSsl30` <a name="resetEnableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30"></a>

```typescript
public resetEnableBackendSsl30(): void
```

##### `resetEnableBackendTls10` <a name="resetEnableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10"></a>

```typescript
public resetEnableBackendTls10(): void
```

##### `resetEnableBackendTls11` <a name="resetEnableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11"></a>

```typescript
public resetEnableBackendTls11(): void
```

##### `resetEnableFrontendSsl30` <a name="resetEnableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30"></a>

```typescript
public resetEnableFrontendSsl30(): void
```

##### `resetEnableFrontendTls10` <a name="resetEnableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10"></a>

```typescript
public resetEnableFrontendTls10(): void
```

##### `resetEnableFrontendTls11` <a name="resetEnableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11"></a>

```typescript
public resetEnableFrontendTls11(): void
```

##### `resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled` <a name="resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```typescript
public resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled(): void
```

##### `resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled` <a name="resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```typescript
public resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled(): void
```

##### `resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled` <a name="resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```typescript
public resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled(): void
```

##### `resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled` <a name="resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```typescript
public resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled(): void
```

##### `resetTlsRsaWithAes128CbcSha256CiphersEnabled` <a name="resetTlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```typescript
public resetTlsRsaWithAes128CbcSha256CiphersEnabled(): void
```

##### `resetTlsRsaWithAes128CbcShaCiphersEnabled` <a name="resetTlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled"></a>

```typescript
public resetTlsRsaWithAes128CbcShaCiphersEnabled(): void
```

##### `resetTlsRsaWithAes128GcmSha256CiphersEnabled` <a name="resetTlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```typescript
public resetTlsRsaWithAes128GcmSha256CiphersEnabled(): void
```

##### `resetTlsRsaWithAes256CbcSha256CiphersEnabled` <a name="resetTlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```typescript
public resetTlsRsaWithAes256CbcSha256CiphersEnabled(): void
```

##### `resetTlsRsaWithAes256CbcShaCiphersEnabled` <a name="resetTlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled"></a>

```typescript
public resetTlsRsaWithAes256CbcShaCiphersEnabled(): void
```

##### `resetTlsRsaWithAes256GcmSha384CiphersEnabled` <a name="resetTlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```typescript
public resetTlsRsaWithAes256GcmSha384CiphersEnabled(): void
```

##### `resetTripleDesCiphersEnabled` <a name="resetTripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled"></a>

```typescript
public resetTripleDesCiphersEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input">enableBackendSsl30Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input">enableBackendTls10Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input">enableBackendTls11Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input">enableFrontendSsl30Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input">enableFrontendTls10Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input">enableFrontendTls11Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput">tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput">tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput">tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput">tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput">tlsRsaWithAes128CbcSha256CiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput">tlsRsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput">tlsRsaWithAes128GcmSha256CiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput">tlsRsaWithAes256CbcSha256CiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput">tlsRsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput">tlsRsaWithAes256GcmSha384CiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput">tripleDesCiphersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30">enableBackendSsl30</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10">enableBackendTls10</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11">enableBackendTls11</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30">enableFrontendSsl30</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10">enableFrontendTls10</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11">enableFrontendTls11</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">tlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">tlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled">tlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled">tlsRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled">tlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled">tlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled">tlsRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled">tlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled">tripleDesCiphersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableBackendSsl30Input`<sup>Optional</sup> <a name="enableBackendSsl30Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input"></a>

```typescript
public readonly enableBackendSsl30Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBackendTls10Input`<sup>Optional</sup> <a name="enableBackendTls10Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input"></a>

```typescript
public readonly enableBackendTls10Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBackendTls11Input`<sup>Optional</sup> <a name="enableBackendTls11Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input"></a>

```typescript
public readonly enableBackendTls11Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableFrontendSsl30Input`<sup>Optional</sup> <a name="enableFrontendSsl30Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input"></a>

```typescript
public readonly enableFrontendSsl30Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableFrontendTls10Input`<sup>Optional</sup> <a name="enableFrontendTls10Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input"></a>

```typescript
public readonly enableFrontendTls10Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableFrontendTls11Input`<sup>Optional</sup> <a name="enableFrontendTls11Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input"></a>

```typescript
public readonly enableFrontendTls11Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput"></a>

```typescript
public readonly tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput"></a>

```typescript
public readonly tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput"></a>

```typescript
public readonly tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput"></a>

```typescript
public readonly tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes128CbcSha256CiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes128CbcSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput"></a>

```typescript
public readonly tlsRsaWithAes128CbcSha256CiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput"></a>

```typescript
public readonly tlsRsaWithAes128CbcShaCiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes128GcmSha256CiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes128GcmSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput"></a>

```typescript
public readonly tlsRsaWithAes128GcmSha256CiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes256CbcSha256CiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes256CbcSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput"></a>

```typescript
public readonly tlsRsaWithAes256CbcSha256CiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput"></a>

```typescript
public readonly tlsRsaWithAes256CbcShaCiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes256GcmSha384CiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes256GcmSha384CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput"></a>

```typescript
public readonly tlsRsaWithAes256GcmSha384CiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tripleDesCiphersEnabledInput`<sup>Optional</sup> <a name="tripleDesCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput"></a>

```typescript
public readonly tripleDesCiphersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBackendSsl30`<sup>Required</sup> <a name="enableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30"></a>

```typescript
public readonly enableBackendSsl30: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBackendTls10`<sup>Required</sup> <a name="enableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10"></a>

```typescript
public readonly enableBackendTls10: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBackendTls11`<sup>Required</sup> <a name="enableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11"></a>

```typescript
public readonly enableBackendTls11: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableFrontendSsl30`<sup>Required</sup> <a name="enableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30"></a>

```typescript
public readonly enableFrontendSsl30: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableFrontendTls10`<sup>Required</sup> <a name="enableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10"></a>

```typescript
public readonly enableFrontendTls10: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableFrontendTls11`<sup>Required</sup> <a name="enableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11"></a>

```typescript
public readonly enableFrontendTls11: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsEcdheRsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsEcdheRsaWithAes128CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsEcdheRsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsEcdheRsaWithAes256CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes128CbcSha256CiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes128CbcSha256CiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes128CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes128GcmSha256CiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes128GcmSha256CiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes256CbcSha256CiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes256CbcSha256CiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes256CbcShaCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsRsaWithAes256GcmSha384CiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```typescript
public readonly tlsRsaWithAes256GcmSha384CiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tripleDesCiphersEnabled`<sup>Required</sup> <a name="tripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled"></a>

```typescript
public readonly tripleDesCiphersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---


### ApiManagementSignInOutputReference <a name="ApiManagementSignInOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementSignInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementSignIn;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---


### ApiManagementSignUpOutputReference <a name="ApiManagementSignUpOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementSignUpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService">putTermsOfService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTermsOfService` <a name="putTermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService"></a>

```typescript
public putTermsOfService(value: ApiManagementSignUpTermsOfService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService">termsOfService</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput">termsOfServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `termsOfService`<sup>Required</sup> <a name="termsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService"></a>

```typescript
public readonly termsOfService: ApiManagementSignUpTermsOfServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `termsOfServiceInput`<sup>Optional</sup> <a name="termsOfServiceInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput"></a>

```typescript
public readonly termsOfServiceInput: ApiManagementSignUpTermsOfService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementSignUp;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---


### ApiManagementSignUpTermsOfServiceOutputReference <a name="ApiManagementSignUpTermsOfServiceOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementSignUpTermsOfServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput">consentRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired">consentRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consentRequiredInput`<sup>Optional</sup> <a name="consentRequiredInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput"></a>

```typescript
public readonly consentRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `consentRequired`<sup>Required</sup> <a name="consentRequired" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired"></a>

```typescript
public readonly consentRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementSignUpTermsOfService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---


### ApiManagementTenantAccessOutputReference <a name="ApiManagementTenantAccessOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementTenantAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementTenantAccess;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---


### ApiManagementTimeoutsOutputReference <a name="ApiManagementTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a> | cdktf.IResolvable

---


### ApiManagementVirtualNetworkConfigurationOutputReference <a name="ApiManagementVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { apiManagement } from '@cdktf/provider-azurerm'

new apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementVirtualNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---



