# `azurerm_storage_account`

Refer to the Terraform Registory for docs: [`azurerm_storage_account`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account).

# `storageAccount` Submodule <a name="`storageAccount` Submodule" id="@cdktf/provider-azurerm.storageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccount <a name="StorageAccount" id="@cdktf/provider-azurerm.storageAccount.StorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account azurerm_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccount(scope: Construct, id: string, config: StorageAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig">StorageAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig">StorageAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication">putAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties">putBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain">putCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy">putImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules">putNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties">putQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy">putSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties">putShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite">putStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccessTier">resetAccessTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccountKind">resetAccountKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowedCopyScope">resetAllowedCopyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowNestedItemsToBePublic">resetAllowNestedItemsToBePublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAzureFilesAuthentication">resetAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetBlobProperties">resetBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCrossTenantReplicationEnabled">resetCrossTenantReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDefaultToOauthAuthentication">resetDefaultToOauthAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly">resetEnableHttpsTrafficOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetImmutabilityPolicy">resetImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetInfrastructureEncryptionEnabled">resetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIsHnsEnabled">resetIsHnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLargeFileShareEnabled">resetLargeFileShareEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNetworkRules">resetNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNfsv3Enabled">resetNfsv3Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueEncryptionKeyType">resetQueueEncryptionKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueProperties">resetQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetRouting">resetRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSasPolicy">resetSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSftpEnabled">resetSftpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSharedAccessKeyEnabled">resetSharedAccessKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetShareProperties">resetShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetStaticWebsite">resetStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTableEncryptionKeyType">resetTableEncryptionKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAzureFilesAuthentication` <a name="putAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication"></a>

```typescript
public putAzureFilesAuthentication(value: StorageAccountAzureFilesAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---

##### `putBlobProperties` <a name="putBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties"></a>

```typescript
public putBlobProperties(value: StorageAccountBlobProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---

##### `putCustomDomain` <a name="putCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain"></a>

```typescript
public putCustomDomain(value: StorageAccountCustomDomain): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey"></a>

```typescript
public putCustomerManagedKey(value: StorageAccountCustomerManagedKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity"></a>

```typescript
public putIdentity(value: StorageAccountIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---

##### `putImmutabilityPolicy` <a name="putImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy"></a>

```typescript
public putImmutabilityPolicy(value: StorageAccountImmutabilityPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---

##### `putNetworkRules` <a name="putNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules"></a>

```typescript
public putNetworkRules(value: StorageAccountNetworkRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---

##### `putQueueProperties` <a name="putQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties"></a>

```typescript
public putQueueProperties(value: StorageAccountQueueProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---

##### `putRouting` <a name="putRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting"></a>

```typescript
public putRouting(value: StorageAccountRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---

##### `putSasPolicy` <a name="putSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy"></a>

```typescript
public putSasPolicy(value: StorageAccountSasPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---

##### `putShareProperties` <a name="putShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties"></a>

```typescript
public putShareProperties(value: StorageAccountShareProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---

##### `putStaticWebsite` <a name="putStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite"></a>

```typescript
public putStaticWebsite(value: StorageAccountStaticWebsite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

---

##### `resetAccessTier` <a name="resetAccessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccessTier"></a>

```typescript
public resetAccessTier(): void
```

##### `resetAccountKind` <a name="resetAccountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccountKind"></a>

```typescript
public resetAccountKind(): void
```

##### `resetAllowedCopyScope` <a name="resetAllowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowedCopyScope"></a>

```typescript
public resetAllowedCopyScope(): void
```

##### `resetAllowNestedItemsToBePublic` <a name="resetAllowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowNestedItemsToBePublic"></a>

```typescript
public resetAllowNestedItemsToBePublic(): void
```

##### `resetAzureFilesAuthentication` <a name="resetAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAzureFilesAuthentication"></a>

```typescript
public resetAzureFilesAuthentication(): void
```

##### `resetBlobProperties` <a name="resetBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetBlobProperties"></a>

```typescript
public resetBlobProperties(): void
```

##### `resetCrossTenantReplicationEnabled` <a name="resetCrossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCrossTenantReplicationEnabled"></a>

```typescript
public resetCrossTenantReplicationEnabled(): void
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomDomain"></a>

```typescript
public resetCustomDomain(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDefaultToOauthAuthentication` <a name="resetDefaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDefaultToOauthAuthentication"></a>

```typescript
public resetDefaultToOauthAuthentication(): void
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEdgeZone"></a>

```typescript
public resetEdgeZone(): void
```

##### `resetEnableHttpsTrafficOnly` <a name="resetEnableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly"></a>

```typescript
public resetEnableHttpsTrafficOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetImmutabilityPolicy` <a name="resetImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetImmutabilityPolicy"></a>

```typescript
public resetImmutabilityPolicy(): void
```

##### `resetInfrastructureEncryptionEnabled` <a name="resetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetInfrastructureEncryptionEnabled"></a>

```typescript
public resetInfrastructureEncryptionEnabled(): void
```

##### `resetIsHnsEnabled` <a name="resetIsHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIsHnsEnabled"></a>

```typescript
public resetIsHnsEnabled(): void
```

##### `resetLargeFileShareEnabled` <a name="resetLargeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLargeFileShareEnabled"></a>

```typescript
public resetLargeFileShareEnabled(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetNetworkRules` <a name="resetNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNetworkRules"></a>

```typescript
public resetNetworkRules(): void
```

##### `resetNfsv3Enabled` <a name="resetNfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNfsv3Enabled"></a>

```typescript
public resetNfsv3Enabled(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetQueueEncryptionKeyType` <a name="resetQueueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueEncryptionKeyType"></a>

```typescript
public resetQueueEncryptionKeyType(): void
```

##### `resetQueueProperties` <a name="resetQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueProperties"></a>

```typescript
public resetQueueProperties(): void
```

##### `resetRouting` <a name="resetRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetRouting"></a>

```typescript
public resetRouting(): void
```

##### `resetSasPolicy` <a name="resetSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSasPolicy"></a>

```typescript
public resetSasPolicy(): void
```

##### `resetSftpEnabled` <a name="resetSftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSftpEnabled"></a>

```typescript
public resetSftpEnabled(): void
```

##### `resetSharedAccessKeyEnabled` <a name="resetSharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSharedAccessKeyEnabled"></a>

```typescript
public resetSharedAccessKeyEnabled(): void
```

##### `resetShareProperties` <a name="resetShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetShareProperties"></a>

```typescript
public resetShareProperties(): void
```

##### `resetStaticWebsite` <a name="resetStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetStaticWebsite"></a>

```typescript
public resetStaticWebsite(): void
```

##### `resetTableEncryptionKeyType` <a name="resetTableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTableEncryptionKeyType"></a>

```typescript
public resetTableEncryptionKeyType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

storageAccount.StorageAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

storageAccount.StorageAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

storageAccount.StorageAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication">azureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties">blobProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy">immutabilityPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules">networkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString">primaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint">primaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost">primaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint">primaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost">primaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint">primaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost">primaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation">primaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint">primaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost">primaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint">primaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost">primaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint">primaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost">primaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties">queueProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy">sasPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString">secondaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint">secondaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost">secondaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint">secondaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost">secondaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint">secondaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost">secondaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation">secondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint">secondaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost">secondaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint">secondaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost">secondaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint">secondaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost">secondaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties">shareProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite">staticWebsite</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput">accessTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput">accountKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput">accountReplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput">accountTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput">allowedCopyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput">allowNestedItemsToBePublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput">azureFilesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput">blobPropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput">crossTenantReplicationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput">customDomainInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput">defaultToOauthAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput">edgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput">enableHttpsTrafficOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput">immutabilityPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput">infrastructureEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput">isHnsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput">largeFileShareEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput">networkRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput">nfsv3EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput">queueEncryptionKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput">queuePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput">routingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput">sasPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput">sftpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput">sharedAccessKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput">sharePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput">staticWebsiteInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput">tableEncryptionKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier">accessTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind">accountKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType">accountReplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier">accountTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope">allowedCopyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic">allowNestedItemsToBePublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled">crossTenantReplicationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication">defaultToOauthAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone">edgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly">enableHttpsTrafficOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled">isHnsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled">largeFileShareEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled">nfsv3Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType">queueEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled">sftpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled">sharedAccessKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType">tableEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azureFilesAuthentication`<sup>Required</sup> <a name="azureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication"></a>

```typescript
public readonly azureFilesAuthentication: StorageAccountAzureFilesAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a>

---

##### `blobProperties`<sup>Required</sup> <a name="blobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties"></a>

```typescript
public readonly blobProperties: StorageAccountBlobPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a>

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain"></a>

```typescript
public readonly customDomain: StorageAccountCustomDomainOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a>

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: StorageAccountCustomerManagedKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity"></a>

```typescript
public readonly identity: StorageAccountIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a>

---

##### `immutabilityPolicy`<sup>Required</sup> <a name="immutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy"></a>

```typescript
public readonly immutabilityPolicy: StorageAccountImmutabilityPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a>

---

##### `networkRules`<sup>Required</sup> <a name="networkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules"></a>

```typescript
public readonly networkRules: StorageAccountNetworkRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `primaryBlobConnectionString`<sup>Required</sup> <a name="primaryBlobConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString"></a>

```typescript
public readonly primaryBlobConnectionString: string;
```

- *Type:* string

---

##### `primaryBlobEndpoint`<sup>Required</sup> <a name="primaryBlobEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint"></a>

```typescript
public readonly primaryBlobEndpoint: string;
```

- *Type:* string

---

##### `primaryBlobHost`<sup>Required</sup> <a name="primaryBlobHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost"></a>

```typescript
public readonly primaryBlobHost: string;
```

- *Type:* string

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryDfsEndpoint`<sup>Required</sup> <a name="primaryDfsEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint"></a>

```typescript
public readonly primaryDfsEndpoint: string;
```

- *Type:* string

---

##### `primaryDfsHost`<sup>Required</sup> <a name="primaryDfsHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost"></a>

```typescript
public readonly primaryDfsHost: string;
```

- *Type:* string

---

##### `primaryFileEndpoint`<sup>Required</sup> <a name="primaryFileEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint"></a>

```typescript
public readonly primaryFileEndpoint: string;
```

- *Type:* string

---

##### `primaryFileHost`<sup>Required</sup> <a name="primaryFileHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost"></a>

```typescript
public readonly primaryFileHost: string;
```

- *Type:* string

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation"></a>

```typescript
public readonly primaryLocation: string;
```

- *Type:* string

---

##### `primaryQueueEndpoint`<sup>Required</sup> <a name="primaryQueueEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint"></a>

```typescript
public readonly primaryQueueEndpoint: string;
```

- *Type:* string

---

##### `primaryQueueHost`<sup>Required</sup> <a name="primaryQueueHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost"></a>

```typescript
public readonly primaryQueueHost: string;
```

- *Type:* string

---

##### `primaryTableEndpoint`<sup>Required</sup> <a name="primaryTableEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint"></a>

```typescript
public readonly primaryTableEndpoint: string;
```

- *Type:* string

---

##### `primaryTableHost`<sup>Required</sup> <a name="primaryTableHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost"></a>

```typescript
public readonly primaryTableHost: string;
```

- *Type:* string

---

##### `primaryWebEndpoint`<sup>Required</sup> <a name="primaryWebEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint"></a>

```typescript
public readonly primaryWebEndpoint: string;
```

- *Type:* string

---

##### `primaryWebHost`<sup>Required</sup> <a name="primaryWebHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost"></a>

```typescript
public readonly primaryWebHost: string;
```

- *Type:* string

---

##### `queueProperties`<sup>Required</sup> <a name="queueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties"></a>

```typescript
public readonly queueProperties: StorageAccountQueuePropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing"></a>

```typescript
public readonly routing: StorageAccountRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a>

---

##### `sasPolicy`<sup>Required</sup> <a name="sasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy"></a>

```typescript
public readonly sasPolicy: StorageAccountSasPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a>

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryBlobConnectionString`<sup>Required</sup> <a name="secondaryBlobConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString"></a>

```typescript
public readonly secondaryBlobConnectionString: string;
```

- *Type:* string

---

##### `secondaryBlobEndpoint`<sup>Required</sup> <a name="secondaryBlobEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint"></a>

```typescript
public readonly secondaryBlobEndpoint: string;
```

- *Type:* string

---

##### `secondaryBlobHost`<sup>Required</sup> <a name="secondaryBlobHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost"></a>

```typescript
public readonly secondaryBlobHost: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryDfsEndpoint`<sup>Required</sup> <a name="secondaryDfsEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint"></a>

```typescript
public readonly secondaryDfsEndpoint: string;
```

- *Type:* string

---

##### `secondaryDfsHost`<sup>Required</sup> <a name="secondaryDfsHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost"></a>

```typescript
public readonly secondaryDfsHost: string;
```

- *Type:* string

---

##### `secondaryFileEndpoint`<sup>Required</sup> <a name="secondaryFileEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint"></a>

```typescript
public readonly secondaryFileEndpoint: string;
```

- *Type:* string

---

##### `secondaryFileHost`<sup>Required</sup> <a name="secondaryFileHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost"></a>

```typescript
public readonly secondaryFileHost: string;
```

- *Type:* string

---

##### `secondaryLocation`<sup>Required</sup> <a name="secondaryLocation" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation"></a>

```typescript
public readonly secondaryLocation: string;
```

- *Type:* string

---

##### `secondaryQueueEndpoint`<sup>Required</sup> <a name="secondaryQueueEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint"></a>

```typescript
public readonly secondaryQueueEndpoint: string;
```

- *Type:* string

---

##### `secondaryQueueHost`<sup>Required</sup> <a name="secondaryQueueHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost"></a>

```typescript
public readonly secondaryQueueHost: string;
```

- *Type:* string

---

##### `secondaryTableEndpoint`<sup>Required</sup> <a name="secondaryTableEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint"></a>

```typescript
public readonly secondaryTableEndpoint: string;
```

- *Type:* string

---

##### `secondaryTableHost`<sup>Required</sup> <a name="secondaryTableHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost"></a>

```typescript
public readonly secondaryTableHost: string;
```

- *Type:* string

---

##### `secondaryWebEndpoint`<sup>Required</sup> <a name="secondaryWebEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint"></a>

```typescript
public readonly secondaryWebEndpoint: string;
```

- *Type:* string

---

##### `secondaryWebHost`<sup>Required</sup> <a name="secondaryWebHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost"></a>

```typescript
public readonly secondaryWebHost: string;
```

- *Type:* string

---

##### `shareProperties`<sup>Required</sup> <a name="shareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties"></a>

```typescript
public readonly shareProperties: StorageAccountSharePropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a>

---

##### `staticWebsite`<sup>Required</sup> <a name="staticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite"></a>

```typescript
public readonly staticWebsite: StorageAccountStaticWebsiteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a>

---

##### `accessTierInput`<sup>Optional</sup> <a name="accessTierInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput"></a>

```typescript
public readonly accessTierInput: string;
```

- *Type:* string

---

##### `accountKindInput`<sup>Optional</sup> <a name="accountKindInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput"></a>

```typescript
public readonly accountKindInput: string;
```

- *Type:* string

---

##### `accountReplicationTypeInput`<sup>Optional</sup> <a name="accountReplicationTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput"></a>

```typescript
public readonly accountReplicationTypeInput: string;
```

- *Type:* string

---

##### `accountTierInput`<sup>Optional</sup> <a name="accountTierInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput"></a>

```typescript
public readonly accountTierInput: string;
```

- *Type:* string

---

##### `allowedCopyScopeInput`<sup>Optional</sup> <a name="allowedCopyScopeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput"></a>

```typescript
public readonly allowedCopyScopeInput: string;
```

- *Type:* string

---

##### `allowNestedItemsToBePublicInput`<sup>Optional</sup> <a name="allowNestedItemsToBePublicInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput"></a>

```typescript
public readonly allowNestedItemsToBePublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureFilesAuthenticationInput`<sup>Optional</sup> <a name="azureFilesAuthenticationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput"></a>

```typescript
public readonly azureFilesAuthenticationInput: StorageAccountAzureFilesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---

##### `blobPropertiesInput`<sup>Optional</sup> <a name="blobPropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput"></a>

```typescript
public readonly blobPropertiesInput: StorageAccountBlobProperties;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---

##### `crossTenantReplicationEnabledInput`<sup>Optional</sup> <a name="crossTenantReplicationEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput"></a>

```typescript
public readonly crossTenantReplicationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput"></a>

```typescript
public readonly customDomainInput: StorageAccountCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: StorageAccountCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---

##### `defaultToOauthAuthenticationInput`<sup>Optional</sup> <a name="defaultToOauthAuthenticationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput"></a>

```typescript
public readonly defaultToOauthAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput"></a>

```typescript
public readonly edgeZoneInput: string;
```

- *Type:* string

---

##### `enableHttpsTrafficOnlyInput`<sup>Optional</sup> <a name="enableHttpsTrafficOnlyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput"></a>

```typescript
public readonly enableHttpsTrafficOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput"></a>

```typescript
public readonly identityInput: StorageAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `immutabilityPolicyInput`<sup>Optional</sup> <a name="immutabilityPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput"></a>

```typescript
public readonly immutabilityPolicyInput: StorageAccountImmutabilityPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---

##### `infrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="infrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput"></a>

```typescript
public readonly infrastructureEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHnsEnabledInput`<sup>Optional</sup> <a name="isHnsEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput"></a>

```typescript
public readonly isHnsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `largeFileShareEnabledInput`<sup>Optional</sup> <a name="largeFileShareEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput"></a>

```typescript
public readonly largeFileShareEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkRulesInput`<sup>Optional</sup> <a name="networkRulesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput"></a>

```typescript
public readonly networkRulesInput: StorageAccountNetworkRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---

##### `nfsv3EnabledInput`<sup>Optional</sup> <a name="nfsv3EnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput"></a>

```typescript
public readonly nfsv3EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queueEncryptionKeyTypeInput`<sup>Optional</sup> <a name="queueEncryptionKeyTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput"></a>

```typescript
public readonly queueEncryptionKeyTypeInput: string;
```

- *Type:* string

---

##### `queuePropertiesInput`<sup>Optional</sup> <a name="queuePropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput"></a>

```typescript
public readonly queuePropertiesInput: StorageAccountQueueProperties;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput"></a>

```typescript
public readonly routingInput: StorageAccountRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---

##### `sasPolicyInput`<sup>Optional</sup> <a name="sasPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput"></a>

```typescript
public readonly sasPolicyInput: StorageAccountSasPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---

##### `sftpEnabledInput`<sup>Optional</sup> <a name="sftpEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput"></a>

```typescript
public readonly sftpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedAccessKeyEnabledInput`<sup>Optional</sup> <a name="sharedAccessKeyEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput"></a>

```typescript
public readonly sharedAccessKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharePropertiesInput`<sup>Optional</sup> <a name="sharePropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput"></a>

```typescript
public readonly sharePropertiesInput: StorageAccountShareProperties;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---

##### `staticWebsiteInput`<sup>Optional</sup> <a name="staticWebsiteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput"></a>

```typescript
public readonly staticWebsiteInput: StorageAccountStaticWebsite;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---

##### `tableEncryptionKeyTypeInput`<sup>Optional</sup> <a name="tableEncryptionKeyTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput"></a>

```typescript
public readonly tableEncryptionKeyTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

---

##### `accessTier`<sup>Required</sup> <a name="accessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier"></a>

```typescript
public readonly accessTier: string;
```

- *Type:* string

---

##### `accountKind`<sup>Required</sup> <a name="accountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind"></a>

```typescript
public readonly accountKind: string;
```

- *Type:* string

---

##### `accountReplicationType`<sup>Required</sup> <a name="accountReplicationType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType"></a>

```typescript
public readonly accountReplicationType: string;
```

- *Type:* string

---

##### `accountTier`<sup>Required</sup> <a name="accountTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier"></a>

```typescript
public readonly accountTier: string;
```

- *Type:* string

---

##### `allowedCopyScope`<sup>Required</sup> <a name="allowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope"></a>

```typescript
public readonly allowedCopyScope: string;
```

- *Type:* string

---

##### `allowNestedItemsToBePublic`<sup>Required</sup> <a name="allowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic"></a>

```typescript
public readonly allowNestedItemsToBePublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crossTenantReplicationEnabled`<sup>Required</sup> <a name="crossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled"></a>

```typescript
public readonly crossTenantReplicationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultToOauthAuthentication`<sup>Required</sup> <a name="defaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication"></a>

```typescript
public readonly defaultToOauthAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone"></a>

```typescript
public readonly edgeZone: string;
```

- *Type:* string

---

##### `enableHttpsTrafficOnly`<sup>Required</sup> <a name="enableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly"></a>

```typescript
public readonly enableHttpsTrafficOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHnsEnabled`<sup>Required</sup> <a name="isHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled"></a>

```typescript
public readonly isHnsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `largeFileShareEnabled`<sup>Required</sup> <a name="largeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled"></a>

```typescript
public readonly largeFileShareEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nfsv3Enabled`<sup>Required</sup> <a name="nfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled"></a>

```typescript
public readonly nfsv3Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queueEncryptionKeyType`<sup>Required</sup> <a name="queueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType"></a>

```typescript
public readonly queueEncryptionKeyType: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sftpEnabled`<sup>Required</sup> <a name="sftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled"></a>

```typescript
public readonly sftpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedAccessKeyEnabled`<sup>Required</sup> <a name="sharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled"></a>

```typescript
public readonly sharedAccessKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tableEncryptionKeyType`<sup>Required</sup> <a name="tableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType"></a>

```typescript
public readonly tableEncryptionKeyType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountAzureFilesAuthentication <a name="StorageAccountAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountAzureFilesAuthentication: storageAccount.StorageAccountAzureFilesAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType">directoryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#directory_type StorageAccount#directory_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | active_directory block. |

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType"></a>

```typescript
public readonly directoryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#directory_type StorageAccount#directory_type}.

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: StorageAccountAzureFilesAuthenticationActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#active_directory StorageAccount#active_directory}

---

### StorageAccountAzureFilesAuthenticationActiveDirectory <a name="StorageAccountAzureFilesAuthenticationActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountAzureFilesAuthenticationActiveDirectory: storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid">domainGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#domain_name StorageAccount#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid">domainSid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName">forestName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#forest_name StorageAccount#forest_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName">netbiosDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid">storageSid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}. |

---

##### `domainGuid`<sup>Required</sup> <a name="domainGuid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid"></a>

```typescript
public readonly domainGuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#domain_name StorageAccount#domain_name}.

---

##### `domainSid`<sup>Required</sup> <a name="domainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid"></a>

```typescript
public readonly domainSid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}.

---

##### `forestName`<sup>Required</sup> <a name="forestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName"></a>

```typescript
public readonly forestName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#forest_name StorageAccount#forest_name}.

---

##### `netbiosDomainName`<sup>Required</sup> <a name="netbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName"></a>

```typescript
public readonly netbiosDomainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}.

---

##### `storageSid`<sup>Required</sup> <a name="storageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid"></a>

```typescript
public readonly storageSid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}.

---

### StorageAccountBlobProperties <a name="StorageAccountBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountBlobProperties: storageAccount.StorageAccountBlobProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled">changeFeedEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays">changeFeedRetentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy">containerDeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | container_delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion">defaultServiceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy">deleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled">lastAccessTimeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled">versioningEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}. |

---

##### `changeFeedEnabled`<sup>Optional</sup> <a name="changeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled"></a>

```typescript
public readonly changeFeedEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}.

---

##### `changeFeedRetentionInDays`<sup>Optional</sup> <a name="changeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays"></a>

```typescript
public readonly changeFeedRetentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}.

---

##### `containerDeleteRetentionPolicy`<sup>Optional</sup> <a name="containerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy"></a>

```typescript
public readonly containerDeleteRetentionPolicy: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

container_delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#container_delete_retention_policy StorageAccount#container_delete_retention_policy}

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | StorageAccountBlobPropertiesCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `defaultServiceVersion`<sup>Optional</sup> <a name="defaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion"></a>

```typescript
public readonly defaultServiceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}.

---

##### `deleteRetentionPolicy`<sup>Optional</sup> <a name="deleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy"></a>

```typescript
public readonly deleteRetentionPolicy: StorageAccountBlobPropertiesDeleteRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#delete_retention_policy StorageAccount#delete_retention_policy}

---

##### `lastAccessTimeEnabled`<sup>Optional</sup> <a name="lastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled"></a>

```typescript
public readonly lastAccessTimeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}.

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: StorageAccountBlobPropertiesRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#restore_policy StorageAccount#restore_policy}

---

##### `versioningEnabled`<sup>Optional</sup> <a name="versioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled"></a>

```typescript
public readonly versioningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}.

---

### StorageAccountBlobPropertiesContainerDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountBlobPropertiesContainerDeleteRetentionPolicy: storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountBlobPropertiesCorsRule <a name="StorageAccountBlobPropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountBlobPropertiesCorsRule: storageAccount.StorageAccountBlobPropertiesCorsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountBlobPropertiesDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountBlobPropertiesDeleteRetentionPolicy: storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountBlobPropertiesRestorePolicy <a name="StorageAccountBlobPropertiesRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountBlobPropertiesRestorePolicy: storageAccount.StorageAccountBlobPropertiesRestorePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountConfig <a name="StorageAccountConfig" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountConfig: storageAccount.StorageAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType">accountReplicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier">accountTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#account_tier StorageAccount#account_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#location StorageAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier">accessTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#access_tier StorageAccount#access_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind">accountKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#account_kind StorageAccount#account_kind}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope">allowedCopyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic">allowNestedItemsToBePublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication">azureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | azure_files_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties">blobProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | blob_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled">crossTenantReplicationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication">defaultToOauthAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone">edgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly">enableHttpsTrafficOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#id StorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy">immutabilityPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | immutability_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled">isHnsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled">largeFileShareEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules">networkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled">nfsv3Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType">queueEncryptionKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties">queueProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | queue_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy">sasPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | sas_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled">sftpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled">sharedAccessKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties">shareProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | share_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite">staticWebsite</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | static_website block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType">tableEncryptionKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#tags StorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountReplicationType`<sup>Required</sup> <a name="accountReplicationType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType"></a>

```typescript
public readonly accountReplicationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}.

---

##### `accountTier`<sup>Required</sup> <a name="accountTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier"></a>

```typescript
public readonly accountTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#account_tier StorageAccount#account_tier}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#location StorageAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#name StorageAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}.

---

##### `accessTier`<sup>Optional</sup> <a name="accessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier"></a>

```typescript
public readonly accessTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#access_tier StorageAccount#access_tier}.

---

##### `accountKind`<sup>Optional</sup> <a name="accountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind"></a>

```typescript
public readonly accountKind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#account_kind StorageAccount#account_kind}.

---

##### `allowedCopyScope`<sup>Optional</sup> <a name="allowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope"></a>

```typescript
public readonly allowedCopyScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}.

---

##### `allowNestedItemsToBePublic`<sup>Optional</sup> <a name="allowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic"></a>

```typescript
public readonly allowNestedItemsToBePublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}.

---

##### `azureFilesAuthentication`<sup>Optional</sup> <a name="azureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication"></a>

```typescript
public readonly azureFilesAuthentication: StorageAccountAzureFilesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

azure_files_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#azure_files_authentication StorageAccount#azure_files_authentication}

---

##### `blobProperties`<sup>Optional</sup> <a name="blobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties"></a>

```typescript
public readonly blobProperties: StorageAccountBlobProperties;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

blob_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#blob_properties StorageAccount#blob_properties}

---

##### `crossTenantReplicationEnabled`<sup>Optional</sup> <a name="crossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled"></a>

```typescript
public readonly crossTenantReplicationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain"></a>

```typescript
public readonly customDomain: StorageAccountCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: StorageAccountCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#customer_managed_key StorageAccount#customer_managed_key}

---

##### `defaultToOauthAuthentication`<sup>Optional</sup> <a name="defaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication"></a>

```typescript
public readonly defaultToOauthAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone"></a>

```typescript
public readonly edgeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}.

---

##### `enableHttpsTrafficOnly`<sup>Optional</sup> <a name="enableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly"></a>

```typescript
public readonly enableHttpsTrafficOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#id StorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity"></a>

```typescript
public readonly identity: StorageAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#identity StorageAccount#identity}

---

##### `immutabilityPolicy`<sup>Optional</sup> <a name="immutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy"></a>

```typescript
public readonly immutabilityPolicy: StorageAccountImmutabilityPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

immutability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#immutability_policy StorageAccount#immutability_policy}

---

##### `infrastructureEncryptionEnabled`<sup>Optional</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}.

---

##### `isHnsEnabled`<sup>Optional</sup> <a name="isHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled"></a>

```typescript
public readonly isHnsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}.

---

##### `largeFileShareEnabled`<sup>Optional</sup> <a name="largeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled"></a>

```typescript
public readonly largeFileShareEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}.

---

##### `networkRules`<sup>Optional</sup> <a name="networkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules"></a>

```typescript
public readonly networkRules: StorageAccountNetworkRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#network_rules StorageAccount#network_rules}

---

##### `nfsv3Enabled`<sup>Optional</sup> <a name="nfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled"></a>

```typescript
public readonly nfsv3Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}.

---

##### `queueEncryptionKeyType`<sup>Optional</sup> <a name="queueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType"></a>

```typescript
public readonly queueEncryptionKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}.

---

##### `queueProperties`<sup>Optional</sup> <a name="queueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties"></a>

```typescript
public readonly queueProperties: StorageAccountQueueProperties;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

queue_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#queue_properties StorageAccount#queue_properties}

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing"></a>

```typescript
public readonly routing: StorageAccountRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#routing StorageAccount#routing}

---

##### `sasPolicy`<sup>Optional</sup> <a name="sasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy"></a>

```typescript
public readonly sasPolicy: StorageAccountSasPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

sas_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#sas_policy StorageAccount#sas_policy}

---

##### `sftpEnabled`<sup>Optional</sup> <a name="sftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled"></a>

```typescript
public readonly sftpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}.

---

##### `sharedAccessKeyEnabled`<sup>Optional</sup> <a name="sharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled"></a>

```typescript
public readonly sharedAccessKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}.

---

##### `shareProperties`<sup>Optional</sup> <a name="shareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties"></a>

```typescript
public readonly shareProperties: StorageAccountShareProperties;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

share_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#share_properties StorageAccount#share_properties}

---

##### `staticWebsite`<sup>Optional</sup> <a name="staticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite"></a>

```typescript
public readonly staticWebsite: StorageAccountStaticWebsite;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

static_website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#static_website StorageAccount#static_website}

---

##### `tableEncryptionKeyType`<sup>Optional</sup> <a name="tableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType"></a>

```typescript
public readonly tableEncryptionKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#tags StorageAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#timeouts StorageAccount#timeouts}

---

### StorageAccountCustomDomain <a name="StorageAccountCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountCustomDomain: storageAccount.StorageAccountCustomDomain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain">useSubdomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#name StorageAccount#name}.

---

##### `useSubdomain`<sup>Optional</sup> <a name="useSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain"></a>

```typescript
public readonly useSubdomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}.

---

### StorageAccountCustomerManagedKey <a name="StorageAccountCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountCustomerManagedKey: storageAccount.StorageAccountCustomerManagedKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}.

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}.

---

### StorageAccountIdentity <a name="StorageAccountIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountIdentity: storageAccount.StorageAccountIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#type StorageAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#type StorageAccount#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}.

---

### StorageAccountImmutabilityPolicy <a name="StorageAccountImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountImmutabilityPolicy: storageAccount.StorageAccountImmutabilityPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites">allowProtectedAppendWrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays">periodSinceCreationInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#state StorageAccount#state}. |

---

##### `allowProtectedAppendWrites`<sup>Required</sup> <a name="allowProtectedAppendWrites" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites"></a>

```typescript
public readonly allowProtectedAppendWrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}.

---

##### `periodSinceCreationInDays`<sup>Required</sup> <a name="periodSinceCreationInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays"></a>

```typescript
public readonly periodSinceCreationInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#state StorageAccount#state}.

---

### StorageAccountNetworkRules <a name="StorageAccountNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountNetworkRules: storageAccount.StorageAccountNetworkRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction">defaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#default_action StorageAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass">bypass</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#bypass StorageAccount#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules">ipRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess">privateLinkAccess</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>[]</code> | private_link_access block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds">virtualNetworkSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}. |

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#default_action StorageAccount#default_action}.

---

##### `bypass`<sup>Optional</sup> <a name="bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass"></a>

```typescript
public readonly bypass: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#bypass StorageAccount#bypass}.

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}.

---

##### `privateLinkAccess`<sup>Optional</sup> <a name="privateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess"></a>

```typescript
public readonly privateLinkAccess: IResolvable | StorageAccountNetworkRulesPrivateLinkAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>[]

private_link_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#private_link_access StorageAccount#private_link_access}

---

##### `virtualNetworkSubnetIds`<sup>Optional</sup> <a name="virtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds"></a>

```typescript
public readonly virtualNetworkSubnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}.

---

### StorageAccountNetworkRulesPrivateLinkAccess <a name="StorageAccountNetworkRulesPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountNetworkRulesPrivateLinkAccess: storageAccount.StorageAccountNetworkRulesPrivateLinkAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId">endpointResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId">endpointTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}. |

---

##### `endpointResourceId`<sup>Required</sup> <a name="endpointResourceId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId"></a>

```typescript
public readonly endpointResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}.

---

##### `endpointTenantId`<sup>Optional</sup> <a name="endpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId"></a>

```typescript
public readonly endpointTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}.

---

### StorageAccountQueueProperties <a name="StorageAccountQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountQueueProperties: storageAccount.StorageAccountQueueProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | minute_metrics block. |

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | StorageAccountQueuePropertiesCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `hourMetrics`<sup>Optional</sup> <a name="hourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics"></a>

```typescript
public readonly hourMetrics: StorageAccountQueuePropertiesHourMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#hour_metrics StorageAccount#hour_metrics}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging"></a>

```typescript
public readonly logging: StorageAccountQueuePropertiesLogging;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#logging StorageAccount#logging}

---

##### `minuteMetrics`<sup>Optional</sup> <a name="minuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics"></a>

```typescript
public readonly minuteMetrics: StorageAccountQueuePropertiesMinuteMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#minute_metrics StorageAccount#minute_metrics}

---

### StorageAccountQueuePropertiesCorsRule <a name="StorageAccountQueuePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesCorsRule: storageAccount.StorageAccountQueuePropertiesCorsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetrics <a name="StorageAccountQueuePropertiesHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesHourMetrics: storageAccount.StorageAccountQueuePropertiesHourMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis">includeApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#version StorageAccount#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesLogging <a name="StorageAccountQueuePropertiesLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesLogging: storageAccount.StorageAccountQueuePropertiesLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read">read</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write">write</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#write StorageAccount#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read"></a>

```typescript
public readonly read: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#read StorageAccount#read}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#version StorageAccount#version}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#write StorageAccount#write}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetrics <a name="StorageAccountQueuePropertiesMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesMinuteMetrics: storageAccount.StorageAccountQueuePropertiesMinuteMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis">includeApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#version StorageAccount#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountRouting <a name="StorageAccountRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountRouting: storageAccount.StorageAccountRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice">choice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#choice StorageAccount#choice}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints">publishInternetEndpoints</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints">publishMicrosoftEndpoints</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}. |

---

##### `choice`<sup>Optional</sup> <a name="choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice"></a>

```typescript
public readonly choice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#choice StorageAccount#choice}.

---

##### `publishInternetEndpoints`<sup>Optional</sup> <a name="publishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints"></a>

```typescript
public readonly publishInternetEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}.

---

##### `publishMicrosoftEndpoints`<sup>Optional</sup> <a name="publishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints"></a>

```typescript
public readonly publishMicrosoftEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}.

---

### StorageAccountSasPolicy <a name="StorageAccountSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountSasPolicy: storageAccount.StorageAccountSasPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod">expirationPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction">expirationAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}. |

---

##### `expirationPeriod`<sup>Required</sup> <a name="expirationPeriod" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod"></a>

```typescript
public readonly expirationPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}.

---

##### `expirationAction`<sup>Optional</sup> <a name="expirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction"></a>

```typescript
public readonly expirationAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}.

---

### StorageAccountShareProperties <a name="StorageAccountShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountShareProperties: storageAccount.StorageAccountShareProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb">smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | smb block. |

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | StorageAccountSharePropertiesCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: StorageAccountSharePropertiesRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#retention_policy StorageAccount#retention_policy}

---

##### `smb`<sup>Optional</sup> <a name="smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb"></a>

```typescript
public readonly smb: StorageAccountSharePropertiesSmb;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

smb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#smb StorageAccount#smb}

---

### StorageAccountSharePropertiesCorsRule <a name="StorageAccountSharePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountSharePropertiesCorsRule: storageAccount.StorageAccountSharePropertiesCorsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountSharePropertiesRetentionPolicy <a name="StorageAccountSharePropertiesRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountSharePropertiesRetentionPolicy: storageAccount.StorageAccountSharePropertiesRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountSharePropertiesSmb <a name="StorageAccountSharePropertiesSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountSharePropertiesSmb: storageAccount.StorageAccountSharePropertiesSmb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes">authenticationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType">channelEncryptionType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType">kerberosTicketEncryptionType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled">multichannelEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions">versions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#versions StorageAccount#versions}. |

---

##### `authenticationTypes`<sup>Optional</sup> <a name="authenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes"></a>

```typescript
public readonly authenticationTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}.

---

##### `channelEncryptionType`<sup>Optional</sup> <a name="channelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType"></a>

```typescript
public readonly channelEncryptionType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}.

---

##### `kerberosTicketEncryptionType`<sup>Optional</sup> <a name="kerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType"></a>

```typescript
public readonly kerberosTicketEncryptionType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}.

---

##### `multichannelEnabled`<sup>Optional</sup> <a name="multichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled"></a>

```typescript
public readonly multichannelEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}.

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions"></a>

```typescript
public readonly versions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#versions StorageAccount#versions}.

---

### StorageAccountStaticWebsite <a name="StorageAccountStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountStaticWebsite: storageAccount.StorageAccountStaticWebsite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document">error404Document</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument">indexDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#index_document StorageAccount#index_document}. |

---

##### `error404Document`<sup>Optional</sup> <a name="error404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document"></a>

```typescript
public readonly error404Document: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}.

---

##### `indexDocument`<sup>Optional</sup> <a name="indexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument"></a>

```typescript
public readonly indexDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#index_document StorageAccount#index_document}.

---

### StorageAccountTimeouts <a name="StorageAccountTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

const storageAccountTimeouts: storageAccount.StorageAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#create StorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#update StorageAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#create StorageAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#read StorageAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/storage_account#update StorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference <a name="StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput">domainGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput">domainSidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput">forestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput">netbiosDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput">storageSidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid">domainGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid">domainSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName">forestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName">netbiosDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid">storageSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainGuidInput`<sup>Optional</sup> <a name="domainGuidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput"></a>

```typescript
public readonly domainGuidInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `domainSidInput`<sup>Optional</sup> <a name="domainSidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput"></a>

```typescript
public readonly domainSidInput: string;
```

- *Type:* string

---

##### `forestNameInput`<sup>Optional</sup> <a name="forestNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput"></a>

```typescript
public readonly forestNameInput: string;
```

- *Type:* string

---

##### `netbiosDomainNameInput`<sup>Optional</sup> <a name="netbiosDomainNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput"></a>

```typescript
public readonly netbiosDomainNameInput: string;
```

- *Type:* string

---

##### `storageSidInput`<sup>Optional</sup> <a name="storageSidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput"></a>

```typescript
public readonly storageSidInput: string;
```

- *Type:* string

---

##### `domainGuid`<sup>Required</sup> <a name="domainGuid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid"></a>

```typescript
public readonly domainGuid: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainSid`<sup>Required</sup> <a name="domainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid"></a>

```typescript
public readonly domainSid: string;
```

- *Type:* string

---

##### `forestName`<sup>Required</sup> <a name="forestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName"></a>

```typescript
public readonly forestName: string;
```

- *Type:* string

---

##### `netbiosDomainName`<sup>Required</sup> <a name="netbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName"></a>

```typescript
public readonly netbiosDomainName: string;
```

- *Type:* string

---

##### `storageSid`<sup>Required</sup> <a name="storageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid"></a>

```typescript
public readonly storageSid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountAzureFilesAuthenticationActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---


### StorageAccountAzureFilesAuthenticationOutputReference <a name="StorageAccountAzureFilesAuthenticationOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountAzureFilesAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory"></a>

```typescript
public putActiveDirectory(value: StorageAccountAzureFilesAuthenticationActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput">directoryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType">directoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: StorageAccountAzureFilesAuthenticationActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---

##### `directoryTypeInput`<sup>Optional</sup> <a name="directoryTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput"></a>

```typescript
public readonly directoryTypeInput: string;
```

- *Type:* string

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType"></a>

```typescript
public readonly directoryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountAzureFilesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---


### StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesCorsRuleList <a name="StorageAccountBlobPropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountBlobPropertiesCorsRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get"></a>

```typescript
public get(index: number): StorageAccountBlobPropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountBlobPropertiesCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>[]

---


### StorageAccountBlobPropertiesCorsRuleOutputReference <a name="StorageAccountBlobPropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```typescript
public readonly exposedHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```typescript
public readonly maxAgeInSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountBlobPropertiesCorsRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>

---


### StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountBlobPropertiesDeleteRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesOutputReference <a name="StorageAccountBlobPropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountBlobPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy">putContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy">putDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy">putRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedEnabled">resetChangeFeedEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedRetentionInDays">resetChangeFeedRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetContainerDeleteRetentionPolicy">resetContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDefaultServiceVersion">resetDefaultServiceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDeleteRetentionPolicy">resetDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetLastAccessTimeEnabled">resetLastAccessTimeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetVersioningEnabled">resetVersioningEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerDeleteRetentionPolicy` <a name="putContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy"></a>

```typescript
public putContainerDeleteRetentionPolicy(value: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule"></a>

```typescript
public putCorsRule(value: IResolvable | StorageAccountBlobPropertiesCorsRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>[]

---

##### `putDeleteRetentionPolicy` <a name="putDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy"></a>

```typescript
public putDeleteRetentionPolicy(value: StorageAccountBlobPropertiesDeleteRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---

##### `putRestorePolicy` <a name="putRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy"></a>

```typescript
public putRestorePolicy(value: StorageAccountBlobPropertiesRestorePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---

##### `resetChangeFeedEnabled` <a name="resetChangeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedEnabled"></a>

```typescript
public resetChangeFeedEnabled(): void
```

##### `resetChangeFeedRetentionInDays` <a name="resetChangeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedRetentionInDays"></a>

```typescript
public resetChangeFeedRetentionInDays(): void
```

##### `resetContainerDeleteRetentionPolicy` <a name="resetContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetContainerDeleteRetentionPolicy"></a>

```typescript
public resetContainerDeleteRetentionPolicy(): void
```

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetDefaultServiceVersion` <a name="resetDefaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDefaultServiceVersion"></a>

```typescript
public resetDefaultServiceVersion(): void
```

##### `resetDeleteRetentionPolicy` <a name="resetDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDeleteRetentionPolicy"></a>

```typescript
public resetDeleteRetentionPolicy(): void
```

##### `resetLastAccessTimeEnabled` <a name="resetLastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetLastAccessTimeEnabled"></a>

```typescript
public resetLastAccessTimeEnabled(): void
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetRestorePolicy"></a>

```typescript
public resetRestorePolicy(): void
```

##### `resetVersioningEnabled` <a name="resetVersioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetVersioningEnabled"></a>

```typescript
public resetVersioningEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy">containerDeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy">deleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput">changeFeedEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput">changeFeedRetentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput">containerDeleteRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput">defaultServiceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput">deleteRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput">lastAccessTimeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput">restorePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput">versioningEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled">changeFeedEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays">changeFeedRetentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion">defaultServiceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled">lastAccessTimeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled">versioningEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerDeleteRetentionPolicy`<sup>Required</sup> <a name="containerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy"></a>

```typescript
public readonly containerDeleteRetentionPolicy: StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a>

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule"></a>

```typescript
public readonly corsRule: StorageAccountBlobPropertiesCorsRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a>

---

##### `deleteRetentionPolicy`<sup>Required</sup> <a name="deleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy"></a>

```typescript
public readonly deleteRetentionPolicy: StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: StorageAccountBlobPropertiesRestorePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a>

---

##### `changeFeedEnabledInput`<sup>Optional</sup> <a name="changeFeedEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput"></a>

```typescript
public readonly changeFeedEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `changeFeedRetentionInDaysInput`<sup>Optional</sup> <a name="changeFeedRetentionInDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput"></a>

```typescript
public readonly changeFeedRetentionInDaysInput: number;
```

- *Type:* number

---

##### `containerDeleteRetentionPolicyInput`<sup>Optional</sup> <a name="containerDeleteRetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput"></a>

```typescript
public readonly containerDeleteRetentionPolicyInput: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | StorageAccountBlobPropertiesCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>[]

---

##### `defaultServiceVersionInput`<sup>Optional</sup> <a name="defaultServiceVersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput"></a>

```typescript
public readonly defaultServiceVersionInput: string;
```

- *Type:* string

---

##### `deleteRetentionPolicyInput`<sup>Optional</sup> <a name="deleteRetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput"></a>

```typescript
public readonly deleteRetentionPolicyInput: StorageAccountBlobPropertiesDeleteRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---

##### `lastAccessTimeEnabledInput`<sup>Optional</sup> <a name="lastAccessTimeEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput"></a>

```typescript
public readonly lastAccessTimeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput"></a>

```typescript
public readonly restorePolicyInput: StorageAccountBlobPropertiesRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---

##### `versioningEnabledInput`<sup>Optional</sup> <a name="versioningEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput"></a>

```typescript
public readonly versioningEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `changeFeedEnabled`<sup>Required</sup> <a name="changeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled"></a>

```typescript
public readonly changeFeedEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `changeFeedRetentionInDays`<sup>Required</sup> <a name="changeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays"></a>

```typescript
public readonly changeFeedRetentionInDays: number;
```

- *Type:* number

---

##### `defaultServiceVersion`<sup>Required</sup> <a name="defaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion"></a>

```typescript
public readonly defaultServiceVersion: string;
```

- *Type:* string

---

##### `lastAccessTimeEnabled`<sup>Required</sup> <a name="lastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled"></a>

```typescript
public readonly lastAccessTimeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versioningEnabled`<sup>Required</sup> <a name="versioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled"></a>

```typescript
public readonly versioningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountBlobProperties;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---


### StorageAccountBlobPropertiesRestorePolicyOutputReference <a name="StorageAccountBlobPropertiesRestorePolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountBlobPropertiesRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---


### StorageAccountCustomDomainOutputReference <a name="StorageAccountCustomDomainOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountCustomDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain">resetUseSubdomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseSubdomain` <a name="resetUseSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain"></a>

```typescript
public resetUseSubdomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput">useSubdomainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain">useSubdomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `useSubdomainInput`<sup>Optional</sup> <a name="useSubdomainInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput"></a>

```typescript
public readonly useSubdomainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `useSubdomain`<sup>Required</sup> <a name="useSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain"></a>

```typescript
public readonly useSubdomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---


### StorageAccountCustomerManagedKeyOutputReference <a name="StorageAccountCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountCustomerManagedKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---


### StorageAccountIdentityOutputReference <a name="StorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---


### StorageAccountImmutabilityPolicyOutputReference <a name="StorageAccountImmutabilityPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountImmutabilityPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput">allowProtectedAppendWritesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput">periodSinceCreationInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites">allowProtectedAppendWrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays">periodSinceCreationInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowProtectedAppendWritesInput`<sup>Optional</sup> <a name="allowProtectedAppendWritesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput"></a>

```typescript
public readonly allowProtectedAppendWritesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `periodSinceCreationInDaysInput`<sup>Optional</sup> <a name="periodSinceCreationInDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput"></a>

```typescript
public readonly periodSinceCreationInDaysInput: number;
```

- *Type:* number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `allowProtectedAppendWrites`<sup>Required</sup> <a name="allowProtectedAppendWrites" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites"></a>

```typescript
public readonly allowProtectedAppendWrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `periodSinceCreationInDays`<sup>Required</sup> <a name="periodSinceCreationInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays"></a>

```typescript
public readonly periodSinceCreationInDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountImmutabilityPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---


### StorageAccountNetworkRulesOutputReference <a name="StorageAccountNetworkRulesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountNetworkRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess">putPrivateLinkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetBypass">resetBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetIpRules">resetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetPrivateLinkAccess">resetPrivateLinkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetVirtualNetworkSubnetIds">resetVirtualNetworkSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateLinkAccess` <a name="putPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess"></a>

```typescript
public putPrivateLinkAccess(value: IResolvable | StorageAccountNetworkRulesPrivateLinkAccess[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>[]

---

##### `resetBypass` <a name="resetBypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetBypass"></a>

```typescript
public resetBypass(): void
```

##### `resetIpRules` <a name="resetIpRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetIpRules"></a>

```typescript
public resetIpRules(): void
```

##### `resetPrivateLinkAccess` <a name="resetPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetPrivateLinkAccess"></a>

```typescript
public resetPrivateLinkAccess(): void
```

##### `resetVirtualNetworkSubnetIds` <a name="resetVirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetVirtualNetworkSubnetIds"></a>

```typescript
public resetVirtualNetworkSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess">privateLinkAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput">bypassInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput">ipRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput">privateLinkAccessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput">virtualNetworkSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass">bypass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules">ipRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds">virtualNetworkSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateLinkAccess`<sup>Required</sup> <a name="privateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess"></a>

```typescript
public readonly privateLinkAccess: StorageAccountNetworkRulesPrivateLinkAccessList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a>

---

##### `bypassInput`<sup>Optional</sup> <a name="bypassInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput"></a>

```typescript
public readonly bypassInput: string[];
```

- *Type:* string[]

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput"></a>

```typescript
public readonly ipRulesInput: string[];
```

- *Type:* string[]

---

##### `privateLinkAccessInput`<sup>Optional</sup> <a name="privateLinkAccessInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput"></a>

```typescript
public readonly privateLinkAccessInput: IResolvable | StorageAccountNetworkRulesPrivateLinkAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>[]

---

##### `virtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput"></a>

```typescript
public readonly virtualNetworkSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass"></a>

```typescript
public readonly bypass: string[];
```

- *Type:* string[]

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

---

##### `virtualNetworkSubnetIds`<sup>Required</sup> <a name="virtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds"></a>

```typescript
public readonly virtualNetworkSubnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountNetworkRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---


### StorageAccountNetworkRulesPrivateLinkAccessList <a name="StorageAccountNetworkRulesPrivateLinkAccessList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get"></a>

```typescript
public get(index: number): StorageAccountNetworkRulesPrivateLinkAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountNetworkRulesPrivateLinkAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>[]

---


### StorageAccountNetworkRulesPrivateLinkAccessOutputReference <a name="StorageAccountNetworkRulesPrivateLinkAccessOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resetEndpointTenantId">resetEndpointTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointTenantId` <a name="resetEndpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resetEndpointTenantId"></a>

```typescript
public resetEndpointTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput">endpointResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput">endpointTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId">endpointResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId">endpointTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointResourceIdInput`<sup>Optional</sup> <a name="endpointResourceIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput"></a>

```typescript
public readonly endpointResourceIdInput: string;
```

- *Type:* string

---

##### `endpointTenantIdInput`<sup>Optional</sup> <a name="endpointTenantIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput"></a>

```typescript
public readonly endpointTenantIdInput: string;
```

- *Type:* string

---

##### `endpointResourceId`<sup>Required</sup> <a name="endpointResourceId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId"></a>

```typescript
public readonly endpointResourceId: string;
```

- *Type:* string

---

##### `endpointTenantId`<sup>Required</sup> <a name="endpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId"></a>

```typescript
public readonly endpointTenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountNetworkRulesPrivateLinkAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>

---


### StorageAccountQueuePropertiesCorsRuleList <a name="StorageAccountQueuePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountQueuePropertiesCorsRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get"></a>

```typescript
public get(index: number): StorageAccountQueuePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountQueuePropertiesCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>[]

---


### StorageAccountQueuePropertiesCorsRuleOutputReference <a name="StorageAccountQueuePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```typescript
public readonly exposedHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```typescript
public readonly maxAgeInSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountQueuePropertiesCorsRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>

---


### StorageAccountQueuePropertiesHourMetricsOutputReference <a name="StorageAccountQueuePropertiesHourMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```typescript
public resetIncludeApis(): void
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```typescript
public resetRetentionPolicyDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis">includeApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```typescript
public readonly includeApisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```typescript
public readonly retentionPolicyDaysInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountQueuePropertiesHourMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---


### StorageAccountQueuePropertiesLoggingOutputReference <a name="StorageAccountQueuePropertiesLoggingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountQueuePropertiesLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```typescript
public resetRetentionPolicyDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput">deleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput">readInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput">writeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read">read</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write">write</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput"></a>

```typescript
public readonly readInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```typescript
public readonly retentionPolicyDaysInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput"></a>

```typescript
public readonly writeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read"></a>

```typescript
public readonly read: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountQueuePropertiesLogging;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---


### StorageAccountQueuePropertiesMinuteMetricsOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```typescript
public resetIncludeApis(): void
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```typescript
public resetRetentionPolicyDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis">includeApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```typescript
public readonly includeApisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```typescript
public readonly retentionPolicyDaysInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountQueuePropertiesMinuteMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---


### StorageAccountQueuePropertiesOutputReference <a name="StorageAccountQueuePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountQueuePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics">putHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics">putMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetHourMetrics">resetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetMinuteMetrics">resetMinuteMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule"></a>

```typescript
public putCorsRule(value: IResolvable | StorageAccountQueuePropertiesCorsRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>[]

---

##### `putHourMetrics` <a name="putHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics"></a>

```typescript
public putHourMetrics(value: StorageAccountQueuePropertiesHourMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging"></a>

```typescript
public putLogging(value: StorageAccountQueuePropertiesLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `putMinuteMetrics` <a name="putMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics"></a>

```typescript
public putMinuteMetrics(value: StorageAccountQueuePropertiesMinuteMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetHourMetrics` <a name="resetHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetHourMetrics"></a>

```typescript
public resetHourMetrics(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetMinuteMetrics` <a name="resetMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetMinuteMetrics"></a>

```typescript
public resetMinuteMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput">hourMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput">minuteMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule"></a>

```typescript
public readonly corsRule: StorageAccountQueuePropertiesCorsRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a>

---

##### `hourMetrics`<sup>Required</sup> <a name="hourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics"></a>

```typescript
public readonly hourMetrics: StorageAccountQueuePropertiesHourMetricsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging"></a>

```typescript
public readonly logging: StorageAccountQueuePropertiesLoggingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a>

---

##### `minuteMetrics`<sup>Required</sup> <a name="minuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics"></a>

```typescript
public readonly minuteMetrics: StorageAccountQueuePropertiesMinuteMetricsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | StorageAccountQueuePropertiesCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>[]

---

##### `hourMetricsInput`<sup>Optional</sup> <a name="hourMetricsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput"></a>

```typescript
public readonly hourMetricsInput: StorageAccountQueuePropertiesHourMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput"></a>

```typescript
public readonly loggingInput: StorageAccountQueuePropertiesLogging;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `minuteMetricsInput`<sup>Optional</sup> <a name="minuteMetricsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput"></a>

```typescript
public readonly minuteMetricsInput: StorageAccountQueuePropertiesMinuteMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountQueueProperties;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---


### StorageAccountRoutingOutputReference <a name="StorageAccountRoutingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetChoice">resetChoice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishInternetEndpoints">resetPublishInternetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishMicrosoftEndpoints">resetPublishMicrosoftEndpoints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChoice` <a name="resetChoice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetChoice"></a>

```typescript
public resetChoice(): void
```

##### `resetPublishInternetEndpoints` <a name="resetPublishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishInternetEndpoints"></a>

```typescript
public resetPublishInternetEndpoints(): void
```

##### `resetPublishMicrosoftEndpoints` <a name="resetPublishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishMicrosoftEndpoints"></a>

```typescript
public resetPublishMicrosoftEndpoints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput">choiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput">publishInternetEndpointsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput">publishMicrosoftEndpointsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice">choice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints">publishInternetEndpoints</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints">publishMicrosoftEndpoints</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `choiceInput`<sup>Optional</sup> <a name="choiceInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput"></a>

```typescript
public readonly choiceInput: string;
```

- *Type:* string

---

##### `publishInternetEndpointsInput`<sup>Optional</sup> <a name="publishInternetEndpointsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput"></a>

```typescript
public readonly publishInternetEndpointsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publishMicrosoftEndpointsInput`<sup>Optional</sup> <a name="publishMicrosoftEndpointsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput"></a>

```typescript
public readonly publishMicrosoftEndpointsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `choice`<sup>Required</sup> <a name="choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice"></a>

```typescript
public readonly choice: string;
```

- *Type:* string

---

##### `publishInternetEndpoints`<sup>Required</sup> <a name="publishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints"></a>

```typescript
public readonly publishInternetEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publishMicrosoftEndpoints`<sup>Required</sup> <a name="publishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints"></a>

```typescript
public readonly publishMicrosoftEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---


### StorageAccountSasPolicyOutputReference <a name="StorageAccountSasPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountSasPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resetExpirationAction">resetExpirationAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationAction` <a name="resetExpirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resetExpirationAction"></a>

```typescript
public resetExpirationAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput">expirationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput">expirationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction">expirationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod">expirationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationActionInput`<sup>Optional</sup> <a name="expirationActionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput"></a>

```typescript
public readonly expirationActionInput: string;
```

- *Type:* string

---

##### `expirationPeriodInput`<sup>Optional</sup> <a name="expirationPeriodInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput"></a>

```typescript
public readonly expirationPeriodInput: string;
```

- *Type:* string

---

##### `expirationAction`<sup>Required</sup> <a name="expirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction"></a>

```typescript
public readonly expirationAction: string;
```

- *Type:* string

---

##### `expirationPeriod`<sup>Required</sup> <a name="expirationPeriod" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod"></a>

```typescript
public readonly expirationPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountSasPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---


### StorageAccountSharePropertiesCorsRuleList <a name="StorageAccountSharePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountSharePropertiesCorsRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get"></a>

```typescript
public get(index: number): StorageAccountSharePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountSharePropertiesCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>[]

---


### StorageAccountSharePropertiesCorsRuleOutputReference <a name="StorageAccountSharePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```typescript
public readonly exposedHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```typescript
public readonly maxAgeInSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountSharePropertiesCorsRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>

---


### StorageAccountSharePropertiesOutputReference <a name="StorageAccountSharePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountSharePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb">putSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetSmb">resetSmb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule"></a>

```typescript
public putCorsRule(value: IResolvable | StorageAccountSharePropertiesCorsRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>[]

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy"></a>

```typescript
public putRetentionPolicy(value: StorageAccountSharePropertiesRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---

##### `putSmb` <a name="putSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb"></a>

```typescript
public putSmb(value: StorageAccountSharePropertiesSmb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetRetentionPolicy"></a>

```typescript
public resetRetentionPolicy(): void
```

##### `resetSmb` <a name="resetSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetSmb"></a>

```typescript
public resetSmb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb">smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput">smbInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule"></a>

```typescript
public readonly corsRule: StorageAccountSharePropertiesCorsRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a>

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: StorageAccountSharePropertiesRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a>

---

##### `smb`<sup>Required</sup> <a name="smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb"></a>

```typescript
public readonly smb: StorageAccountSharePropertiesSmbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | StorageAccountSharePropertiesCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>[]

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput"></a>

```typescript
public readonly retentionPolicyInput: StorageAccountSharePropertiesRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---

##### `smbInput`<sup>Optional</sup> <a name="smbInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput"></a>

```typescript
public readonly smbInput: StorageAccountSharePropertiesSmb;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountShareProperties;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---


### StorageAccountSharePropertiesRetentionPolicyOutputReference <a name="StorageAccountSharePropertiesRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountSharePropertiesRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---


### StorageAccountSharePropertiesSmbOutputReference <a name="StorageAccountSharePropertiesSmbOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountSharePropertiesSmbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetAuthenticationTypes">resetAuthenticationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetChannelEncryptionType">resetChannelEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetKerberosTicketEncryptionType">resetKerberosTicketEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetMultichannelEnabled">resetMultichannelEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetVersions">resetVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationTypes` <a name="resetAuthenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetAuthenticationTypes"></a>

```typescript
public resetAuthenticationTypes(): void
```

##### `resetChannelEncryptionType` <a name="resetChannelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetChannelEncryptionType"></a>

```typescript
public resetChannelEncryptionType(): void
```

##### `resetKerberosTicketEncryptionType` <a name="resetKerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetKerberosTicketEncryptionType"></a>

```typescript
public resetKerberosTicketEncryptionType(): void
```

##### `resetMultichannelEnabled` <a name="resetMultichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetMultichannelEnabled"></a>

```typescript
public resetMultichannelEnabled(): void
```

##### `resetVersions` <a name="resetVersions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetVersions"></a>

```typescript
public resetVersions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput">authenticationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput">channelEncryptionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput">kerberosTicketEncryptionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput">multichannelEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput">versionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes">authenticationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType">channelEncryptionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType">kerberosTicketEncryptionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled">multichannelEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions">versions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationTypesInput`<sup>Optional</sup> <a name="authenticationTypesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput"></a>

```typescript
public readonly authenticationTypesInput: string[];
```

- *Type:* string[]

---

##### `channelEncryptionTypeInput`<sup>Optional</sup> <a name="channelEncryptionTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput"></a>

```typescript
public readonly channelEncryptionTypeInput: string[];
```

- *Type:* string[]

---

##### `kerberosTicketEncryptionTypeInput`<sup>Optional</sup> <a name="kerberosTicketEncryptionTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput"></a>

```typescript
public readonly kerberosTicketEncryptionTypeInput: string[];
```

- *Type:* string[]

---

##### `multichannelEnabledInput`<sup>Optional</sup> <a name="multichannelEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput"></a>

```typescript
public readonly multichannelEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput"></a>

```typescript
public readonly versionsInput: string[];
```

- *Type:* string[]

---

##### `authenticationTypes`<sup>Required</sup> <a name="authenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes"></a>

```typescript
public readonly authenticationTypes: string[];
```

- *Type:* string[]

---

##### `channelEncryptionType`<sup>Required</sup> <a name="channelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType"></a>

```typescript
public readonly channelEncryptionType: string[];
```

- *Type:* string[]

---

##### `kerberosTicketEncryptionType`<sup>Required</sup> <a name="kerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType"></a>

```typescript
public readonly kerberosTicketEncryptionType: string[];
```

- *Type:* string[]

---

##### `multichannelEnabled`<sup>Required</sup> <a name="multichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled"></a>

```typescript
public readonly multichannelEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions"></a>

```typescript
public readonly versions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountSharePropertiesSmb;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---


### StorageAccountStaticWebsiteOutputReference <a name="StorageAccountStaticWebsiteOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountStaticWebsiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetError404Document">resetError404Document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetIndexDocument">resetIndexDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetError404Document` <a name="resetError404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetError404Document"></a>

```typescript
public resetError404Document(): void
```

##### `resetIndexDocument` <a name="resetIndexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetIndexDocument"></a>

```typescript
public resetIndexDocument(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput">error404DocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput">indexDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document">error404Document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument">indexDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error404DocumentInput`<sup>Optional</sup> <a name="error404DocumentInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput"></a>

```typescript
public readonly error404DocumentInput: string;
```

- *Type:* string

---

##### `indexDocumentInput`<sup>Optional</sup> <a name="indexDocumentInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput"></a>

```typescript
public readonly indexDocumentInput: string;
```

- *Type:* string

---

##### `error404Document`<sup>Required</sup> <a name="error404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document"></a>

```typescript
public readonly error404Document: string;
```

- *Type:* string

---

##### `indexDocument`<sup>Required</sup> <a name="indexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument"></a>

```typescript
public readonly indexDocument: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountStaticWebsite;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---


### StorageAccountTimeoutsOutputReference <a name="StorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageAccount } from '@cdktf/provider-azurerm'

new storageAccount.StorageAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

---



