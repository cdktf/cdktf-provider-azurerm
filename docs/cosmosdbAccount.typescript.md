# `cosmosdbAccount` Submodule <a name="`cosmosdbAccount` Submodule" id="@cdktf/provider-azurerm.cosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbAccount <a name="CosmosdbAccount" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account azurerm_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccount(scope: Construct, id: string, config: CosmosdbAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig">CosmosdbAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig">CosmosdbAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage">putAnalyticalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy">putConsistencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation">putGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore">putRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule">putVirtualNetworkRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAccessKeyMetadataWritesEnabled">resetAccessKeyMetadataWritesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorage">resetAnalyticalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorageEnabled">resetAnalyticalStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAutomaticFailoverEnabled">resetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBurstCapacityEnabled">resetBurstCapacityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetDefaultIdentityType">resetDefaultIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetFreeTierEnabled">resetFreeTierEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIpRangeFilter">resetIpRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIsVirtualNetworkFilterEnabled">resetIsVirtualNetworkFilterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetLocalAuthenticationDisabled">resetLocalAuthenticationDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetManagedHsmKeyId">resetManagedHsmKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMinimalTlsVersion">resetMinimalTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMongoServerVersion">resetMongoServerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMultipleWriteLocationsEnabled">resetMultipleWriteLocationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassForAzureServices">resetNetworkAclBypassForAzureServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassIds">resetNetworkAclBypassIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPartitionMergeEnabled">resetPartitionMergeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetRestore">resetRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetVirtualNetworkRule">resetVirtualNetworkRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalyticalStorage` <a name="putAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage"></a>

```typescript
public putAnalyticalStorage(value: CosmosdbAccountAnalyticalStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup"></a>

```typescript
public putBackup(value: CosmosdbAccountBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---

##### `putCapabilities` <a name="putCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities"></a>

```typescript
public putCapabilities(value: IResolvable | CosmosdbAccountCapabilities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>[]

---

##### `putCapacity` <a name="putCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity"></a>

```typescript
public putCapacity(value: CosmosdbAccountCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---

##### `putConsistencyPolicy` <a name="putConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy"></a>

```typescript
public putConsistencyPolicy(value: CosmosdbAccountConsistencyPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule"></a>

```typescript
public putCorsRule(value: CosmosdbAccountCorsRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---

##### `putGeoLocation` <a name="putGeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation"></a>

```typescript
public putGeoLocation(value: IResolvable | CosmosdbAccountGeoLocation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity"></a>

```typescript
public putIdentity(value: CosmosdbAccountIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---

##### `putRestore` <a name="putRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore"></a>

```typescript
public putRestore(value: CosmosdbAccountRestore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

---

##### `putVirtualNetworkRule` <a name="putVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule"></a>

```typescript
public putVirtualNetworkRule(value: IResolvable | CosmosdbAccountVirtualNetworkRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>[]

---

##### `resetAccessKeyMetadataWritesEnabled` <a name="resetAccessKeyMetadataWritesEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAccessKeyMetadataWritesEnabled"></a>

```typescript
public resetAccessKeyMetadataWritesEnabled(): void
```

##### `resetAnalyticalStorage` <a name="resetAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorage"></a>

```typescript
public resetAnalyticalStorage(): void
```

##### `resetAnalyticalStorageEnabled` <a name="resetAnalyticalStorageEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorageEnabled"></a>

```typescript
public resetAnalyticalStorageEnabled(): void
```

##### `resetAutomaticFailoverEnabled` <a name="resetAutomaticFailoverEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAutomaticFailoverEnabled"></a>

```typescript
public resetAutomaticFailoverEnabled(): void
```

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBackup"></a>

```typescript
public resetBackup(): void
```

##### `resetBurstCapacityEnabled` <a name="resetBurstCapacityEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBurstCapacityEnabled"></a>

```typescript
public resetBurstCapacityEnabled(): void
```

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapacity"></a>

```typescript
public resetCapacity(): void
```

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCreateMode"></a>

```typescript
public resetCreateMode(): void
```

##### `resetDefaultIdentityType` <a name="resetDefaultIdentityType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetDefaultIdentityType"></a>

```typescript
public resetDefaultIdentityType(): void
```

##### `resetFreeTierEnabled` <a name="resetFreeTierEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetFreeTierEnabled"></a>

```typescript
public resetFreeTierEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetIpRangeFilter` <a name="resetIpRangeFilter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIpRangeFilter"></a>

```typescript
public resetIpRangeFilter(): void
```

##### `resetIsVirtualNetworkFilterEnabled` <a name="resetIsVirtualNetworkFilterEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIsVirtualNetworkFilterEnabled"></a>

```typescript
public resetIsVirtualNetworkFilterEnabled(): void
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKeyVaultKeyId"></a>

```typescript
public resetKeyVaultKeyId(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetLocalAuthenticationDisabled` <a name="resetLocalAuthenticationDisabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetLocalAuthenticationDisabled"></a>

```typescript
public resetLocalAuthenticationDisabled(): void
```

##### `resetManagedHsmKeyId` <a name="resetManagedHsmKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetManagedHsmKeyId"></a>

```typescript
public resetManagedHsmKeyId(): void
```

##### `resetMinimalTlsVersion` <a name="resetMinimalTlsVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMinimalTlsVersion"></a>

```typescript
public resetMinimalTlsVersion(): void
```

##### `resetMongoServerVersion` <a name="resetMongoServerVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMongoServerVersion"></a>

```typescript
public resetMongoServerVersion(): void
```

##### `resetMultipleWriteLocationsEnabled` <a name="resetMultipleWriteLocationsEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMultipleWriteLocationsEnabled"></a>

```typescript
public resetMultipleWriteLocationsEnabled(): void
```

##### `resetNetworkAclBypassForAzureServices` <a name="resetNetworkAclBypassForAzureServices" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassForAzureServices"></a>

```typescript
public resetNetworkAclBypassForAzureServices(): void
```

##### `resetNetworkAclBypassIds` <a name="resetNetworkAclBypassIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassIds"></a>

```typescript
public resetNetworkAclBypassIds(): void
```

##### `resetPartitionMergeEnabled` <a name="resetPartitionMergeEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPartitionMergeEnabled"></a>

```typescript
public resetPartitionMergeEnabled(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetRestore` <a name="resetRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetRestore"></a>

```typescript
public resetRestore(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualNetworkRule` <a name="resetVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetVirtualNetworkRule"></a>

```typescript
public resetVirtualNetworkRule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

cosmosdbAccount.CosmosdbAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

cosmosdbAccount.CosmosdbAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

cosmosdbAccount.CosmosdbAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

cosmosdbAccount.CosmosdbAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CosmosdbAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorage">analyticalStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference">CosmosdbAccountAnalyticalStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference">CosmosdbAccountBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList">CosmosdbAccountCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference">CosmosdbAccountCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicy">consistencyPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference">CosmosdbAccountConsistencyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference">CosmosdbAccountCorsRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocation">geoLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList">CosmosdbAccountGeoLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference">CosmosdbAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryMongodbConnectionString">primaryMongodbConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyKey">primaryReadonlyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyMongodbConnectionString">primaryReadonlyMongodbConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlySqlConnectionString">primaryReadonlySqlConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primarySqlConnectionString">primarySqlConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.readEndpoints">readEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restore">restore</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference">CosmosdbAccountRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryMongodbConnectionString">secondaryMongodbConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyKey">secondaryReadonlyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyMongodbConnectionString">secondaryReadonlyMongodbConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlySqlConnectionString">secondaryReadonlySqlConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondarySqlConnectionString">secondarySqlConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference">CosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRule">virtualNetworkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList">CosmosdbAccountVirtualNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.writeEndpoints">writeEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabledInput">accessKeyMetadataWritesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabledInput">analyticalStorageEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageInput">analyticalStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.automaticFailoverEnabledInput">automaticFailoverEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.burstCapacityEnabledInput">burstCapacityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilitiesInput">capabilitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacityInput">capacityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicyInput">consistencyPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRuleInput">corsRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createModeInput">createModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityTypeInput">defaultIdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.freeTierEnabledInput">freeTierEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocationInput">geoLocationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilterInput">ipRangeFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabledInput">isVirtualNetworkFilterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabledInput">localAuthenticationDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.managedHsmKeyIdInput">managedHsmKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.minimalTlsVersionInput">minimalTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersionInput">mongoServerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.multipleWriteLocationsEnabledInput">multipleWriteLocationsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServicesInput">networkAclBypassForAzureServicesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIdsInput">networkAclBypassIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerTypeInput">offerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.partitionMergeEnabledInput">partitionMergeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restoreInput">restoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRuleInput">virtualNetworkRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabled">accessKeyMetadataWritesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabled">analyticalStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.burstCapacityEnabled">burstCapacityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createMode">createMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityType">defaultIdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.freeTierEnabled">freeTierEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilter">ipRangeFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabled">isVirtualNetworkFilterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabled">localAuthenticationDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.minimalTlsVersion">minimalTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersion">mongoServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.multipleWriteLocationsEnabled">multipleWriteLocationsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServices">networkAclBypassForAzureServices</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIds">networkAclBypassIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerType">offerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.partitionMergeEnabled">partitionMergeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `analyticalStorage`<sup>Required</sup> <a name="analyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorage"></a>

```typescript
public readonly analyticalStorage: CosmosdbAccountAnalyticalStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference">CosmosdbAccountAnalyticalStorageOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backup"></a>

```typescript
public readonly backup: CosmosdbAccountBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference">CosmosdbAccountBackupOutputReference</a>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilities"></a>

```typescript
public readonly capabilities: CosmosdbAccountCapabilitiesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList">CosmosdbAccountCapabilitiesList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacity"></a>

```typescript
public readonly capacity: CosmosdbAccountCapacityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference">CosmosdbAccountCapacityOutputReference</a>

---

##### `consistencyPolicy`<sup>Required</sup> <a name="consistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicy"></a>

```typescript
public readonly consistencyPolicy: CosmosdbAccountConsistencyPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference">CosmosdbAccountConsistencyPolicyOutputReference</a>

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRule"></a>

```typescript
public readonly corsRule: CosmosdbAccountCorsRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference">CosmosdbAccountCorsRuleOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `geoLocation`<sup>Required</sup> <a name="geoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocation"></a>

```typescript
public readonly geoLocation: CosmosdbAccountGeoLocationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList">CosmosdbAccountGeoLocationList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identity"></a>

```typescript
public readonly identity: CosmosdbAccountIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference">CosmosdbAccountIdentityOutputReference</a>

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `primaryMongodbConnectionString`<sup>Required</sup> <a name="primaryMongodbConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryMongodbConnectionString"></a>

```typescript
public readonly primaryMongodbConnectionString: string;
```

- *Type:* string

---

##### `primaryReadonlyKey`<sup>Required</sup> <a name="primaryReadonlyKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyKey"></a>

```typescript
public readonly primaryReadonlyKey: string;
```

- *Type:* string

---

##### `primaryReadonlyMongodbConnectionString`<sup>Required</sup> <a name="primaryReadonlyMongodbConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyMongodbConnectionString"></a>

```typescript
public readonly primaryReadonlyMongodbConnectionString: string;
```

- *Type:* string

---

##### `primaryReadonlySqlConnectionString`<sup>Required</sup> <a name="primaryReadonlySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlySqlConnectionString"></a>

```typescript
public readonly primaryReadonlySqlConnectionString: string;
```

- *Type:* string

---

##### `primarySqlConnectionString`<sup>Required</sup> <a name="primarySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primarySqlConnectionString"></a>

```typescript
public readonly primarySqlConnectionString: string;
```

- *Type:* string

---

##### `readEndpoints`<sup>Required</sup> <a name="readEndpoints" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.readEndpoints"></a>

```typescript
public readonly readEndpoints: string[];
```

- *Type:* string[]

---

##### `restore`<sup>Required</sup> <a name="restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restore"></a>

```typescript
public readonly restore: CosmosdbAccountRestoreOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference">CosmosdbAccountRestoreOutputReference</a>

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `secondaryMongodbConnectionString`<sup>Required</sup> <a name="secondaryMongodbConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryMongodbConnectionString"></a>

```typescript
public readonly secondaryMongodbConnectionString: string;
```

- *Type:* string

---

##### `secondaryReadonlyKey`<sup>Required</sup> <a name="secondaryReadonlyKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyKey"></a>

```typescript
public readonly secondaryReadonlyKey: string;
```

- *Type:* string

---

##### `secondaryReadonlyMongodbConnectionString`<sup>Required</sup> <a name="secondaryReadonlyMongodbConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyMongodbConnectionString"></a>

```typescript
public readonly secondaryReadonlyMongodbConnectionString: string;
```

- *Type:* string

---

##### `secondaryReadonlySqlConnectionString`<sup>Required</sup> <a name="secondaryReadonlySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlySqlConnectionString"></a>

```typescript
public readonly secondaryReadonlySqlConnectionString: string;
```

- *Type:* string

---

##### `secondarySqlConnectionString`<sup>Required</sup> <a name="secondarySqlConnectionString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondarySqlConnectionString"></a>

```typescript
public readonly secondarySqlConnectionString: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference">CosmosdbAccountTimeoutsOutputReference</a>

---

##### `virtualNetworkRule`<sup>Required</sup> <a name="virtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRule"></a>

```typescript
public readonly virtualNetworkRule: CosmosdbAccountVirtualNetworkRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList">CosmosdbAccountVirtualNetworkRuleList</a>

---

##### `writeEndpoints`<sup>Required</sup> <a name="writeEndpoints" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.writeEndpoints"></a>

```typescript
public readonly writeEndpoints: string[];
```

- *Type:* string[]

---

##### `accessKeyMetadataWritesEnabledInput`<sup>Optional</sup> <a name="accessKeyMetadataWritesEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabledInput"></a>

```typescript
public readonly accessKeyMetadataWritesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analyticalStorageEnabledInput`<sup>Optional</sup> <a name="analyticalStorageEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabledInput"></a>

```typescript
public readonly analyticalStorageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analyticalStorageInput`<sup>Optional</sup> <a name="analyticalStorageInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageInput"></a>

```typescript
public readonly analyticalStorageInput: CosmosdbAccountAnalyticalStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---

##### `automaticFailoverEnabledInput`<sup>Optional</sup> <a name="automaticFailoverEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.automaticFailoverEnabledInput"></a>

```typescript
public readonly automaticFailoverEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backupInput"></a>

```typescript
public readonly backupInput: CosmosdbAccountBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---

##### `burstCapacityEnabledInput`<sup>Optional</sup> <a name="burstCapacityEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.burstCapacityEnabledInput"></a>

```typescript
public readonly burstCapacityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: IResolvable | CosmosdbAccountCapabilities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>[]

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacityInput"></a>

```typescript
public readonly capacityInput: CosmosdbAccountCapacity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---

##### `consistencyPolicyInput`<sup>Optional</sup> <a name="consistencyPolicyInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicyInput"></a>

```typescript
public readonly consistencyPolicyInput: CosmosdbAccountConsistencyPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: CosmosdbAccountCorsRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createModeInput"></a>

```typescript
public readonly createModeInput: string;
```

- *Type:* string

---

##### `defaultIdentityTypeInput`<sup>Optional</sup> <a name="defaultIdentityTypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityTypeInput"></a>

```typescript
public readonly defaultIdentityTypeInput: string;
```

- *Type:* string

---

##### `freeTierEnabledInput`<sup>Optional</sup> <a name="freeTierEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.freeTierEnabledInput"></a>

```typescript
public readonly freeTierEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geoLocationInput`<sup>Optional</sup> <a name="geoLocationInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocationInput"></a>

```typescript
public readonly geoLocationInput: IResolvable | CosmosdbAccountGeoLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>[]

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identityInput"></a>

```typescript
public readonly identityInput: CosmosdbAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipRangeFilterInput`<sup>Optional</sup> <a name="ipRangeFilterInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilterInput"></a>

```typescript
public readonly ipRangeFilterInput: string[];
```

- *Type:* string[]

---

##### `isVirtualNetworkFilterEnabledInput`<sup>Optional</sup> <a name="isVirtualNetworkFilterEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabledInput"></a>

```typescript
public readonly isVirtualNetworkFilterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `localAuthenticationDisabledInput`<sup>Optional</sup> <a name="localAuthenticationDisabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabledInput"></a>

```typescript
public readonly localAuthenticationDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedHsmKeyIdInput`<sup>Optional</sup> <a name="managedHsmKeyIdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.managedHsmKeyIdInput"></a>

```typescript
public readonly managedHsmKeyIdInput: string;
```

- *Type:* string

---

##### `minimalTlsVersionInput`<sup>Optional</sup> <a name="minimalTlsVersionInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.minimalTlsVersionInput"></a>

```typescript
public readonly minimalTlsVersionInput: string;
```

- *Type:* string

---

##### `mongoServerVersionInput`<sup>Optional</sup> <a name="mongoServerVersionInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersionInput"></a>

```typescript
public readonly mongoServerVersionInput: string;
```

- *Type:* string

---

##### `multipleWriteLocationsEnabledInput`<sup>Optional</sup> <a name="multipleWriteLocationsEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.multipleWriteLocationsEnabledInput"></a>

```typescript
public readonly multipleWriteLocationsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkAclBypassForAzureServicesInput`<sup>Optional</sup> <a name="networkAclBypassForAzureServicesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServicesInput"></a>

```typescript
public readonly networkAclBypassForAzureServicesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkAclBypassIdsInput`<sup>Optional</sup> <a name="networkAclBypassIdsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIdsInput"></a>

```typescript
public readonly networkAclBypassIdsInput: string[];
```

- *Type:* string[]

---

##### `offerTypeInput`<sup>Optional</sup> <a name="offerTypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerTypeInput"></a>

```typescript
public readonly offerTypeInput: string;
```

- *Type:* string

---

##### `partitionMergeEnabledInput`<sup>Optional</sup> <a name="partitionMergeEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.partitionMergeEnabledInput"></a>

```typescript
public readonly partitionMergeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `restoreInput`<sup>Optional</sup> <a name="restoreInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restoreInput"></a>

```typescript
public readonly restoreInput: CosmosdbAccountRestore;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CosmosdbAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

---

##### `virtualNetworkRuleInput`<sup>Optional</sup> <a name="virtualNetworkRuleInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRuleInput"></a>

```typescript
public readonly virtualNetworkRuleInput: IResolvable | CosmosdbAccountVirtualNetworkRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>[]

---

##### `accessKeyMetadataWritesEnabled`<sup>Required</sup> <a name="accessKeyMetadataWritesEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabled"></a>

```typescript
public readonly accessKeyMetadataWritesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analyticalStorageEnabled`<sup>Required</sup> <a name="analyticalStorageEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabled"></a>

```typescript
public readonly analyticalStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `automaticFailoverEnabled`<sup>Required</sup> <a name="automaticFailoverEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `burstCapacityEnabled`<sup>Required</sup> <a name="burstCapacityEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.burstCapacityEnabled"></a>

```typescript
public readonly burstCapacityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

---

##### `defaultIdentityType`<sup>Required</sup> <a name="defaultIdentityType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityType"></a>

```typescript
public readonly defaultIdentityType: string;
```

- *Type:* string

---

##### `freeTierEnabled`<sup>Required</sup> <a name="freeTierEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.freeTierEnabled"></a>

```typescript
public readonly freeTierEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipRangeFilter`<sup>Required</sup> <a name="ipRangeFilter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilter"></a>

```typescript
public readonly ipRangeFilter: string[];
```

- *Type:* string[]

---

##### `isVirtualNetworkFilterEnabled`<sup>Required</sup> <a name="isVirtualNetworkFilterEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabled"></a>

```typescript
public readonly isVirtualNetworkFilterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `localAuthenticationDisabled`<sup>Required</sup> <a name="localAuthenticationDisabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabled"></a>

```typescript
public readonly localAuthenticationDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedHsmKeyId`<sup>Required</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.managedHsmKeyId"></a>

```typescript
public readonly managedHsmKeyId: string;
```

- *Type:* string

---

##### `minimalTlsVersion`<sup>Required</sup> <a name="minimalTlsVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.minimalTlsVersion"></a>

```typescript
public readonly minimalTlsVersion: string;
```

- *Type:* string

---

##### `mongoServerVersion`<sup>Required</sup> <a name="mongoServerVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersion"></a>

```typescript
public readonly mongoServerVersion: string;
```

- *Type:* string

---

##### `multipleWriteLocationsEnabled`<sup>Required</sup> <a name="multipleWriteLocationsEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.multipleWriteLocationsEnabled"></a>

```typescript
public readonly multipleWriteLocationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkAclBypassForAzureServices`<sup>Required</sup> <a name="networkAclBypassForAzureServices" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServices"></a>

```typescript
public readonly networkAclBypassForAzureServices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkAclBypassIds`<sup>Required</sup> <a name="networkAclBypassIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIds"></a>

```typescript
public readonly networkAclBypassIds: string[];
```

- *Type:* string[]

---

##### `offerType`<sup>Required</sup> <a name="offerType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerType"></a>

```typescript
public readonly offerType: string;
```

- *Type:* string

---

##### `partitionMergeEnabled`<sup>Required</sup> <a name="partitionMergeEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.partitionMergeEnabled"></a>

```typescript
public readonly partitionMergeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbAccountAnalyticalStorage <a name="CosmosdbAccountAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountAnalyticalStorage: cosmosdbAccount.CosmosdbAccountAnalyticalStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.property.schemaType">schemaType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#schema_type CosmosdbAccount#schema_type}. |

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#schema_type CosmosdbAccount#schema_type}.

---

### CosmosdbAccountBackup <a name="CosmosdbAccountBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountBackup: cosmosdbAccount.CosmosdbAccountBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.retentionInHours">retentionInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.storageRedundancy">storageRedundancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#tier CosmosdbAccount#tier}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

##### `intervalInMinutes`<sup>Optional</sup> <a name="intervalInMinutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}.

---

##### `retentionInHours`<sup>Optional</sup> <a name="retentionInHours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.retentionInHours"></a>

```typescript
public readonly retentionInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}.

---

##### `storageRedundancy`<sup>Optional</sup> <a name="storageRedundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.storageRedundancy"></a>

```typescript
public readonly storageRedundancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#tier CosmosdbAccount#tier}.

---

### CosmosdbAccountCapabilities <a name="CosmosdbAccountCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountCapabilities: cosmosdbAccount.CosmosdbAccountCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

### CosmosdbAccountCapacity <a name="CosmosdbAccountCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountCapacity: cosmosdbAccount.CosmosdbAccountCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.property.totalThroughputLimit">totalThroughputLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}. |

---

##### `totalThroughputLimit`<sup>Required</sup> <a name="totalThroughputLimit" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.property.totalThroughputLimit"></a>

```typescript
public readonly totalThroughputLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}.

---

### CosmosdbAccountConfig <a name="CosmosdbAccountConfig" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountConfig: cosmosdbAccount.CosmosdbAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.consistencyPolicy">consistencyPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | consistency_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.geoLocation">geoLocation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>[]</code> | geo_location block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.offerType">offerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.accessKeyMetadataWritesEnabled">accessKeyMetadataWritesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorage">analyticalStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | analytical_storage block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorageEnabled">analyticalStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#automatic_failover_enabled CosmosdbAccount#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.burstCapacityEnabled">burstCapacityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#burst_capacity_enabled CosmosdbAccount#burst_capacity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capabilities">capabilities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>[]</code> | capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.createMode">createMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.defaultIdentityType">defaultIdentityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.freeTierEnabled">freeTierEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#free_tier_enabled CosmosdbAccount#free_tier_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.ipRangeFilter">ipRangeFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.isVirtualNetworkFilterEnabled">isVirtualNetworkFilterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.localAuthenticationDisabled">localAuthenticationDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#managed_hsm_key_id CosmosdbAccount#managed_hsm_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.minimalTlsVersion">minimalTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#minimal_tls_version CosmosdbAccount#minimal_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.mongoServerVersion">mongoServerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.multipleWriteLocationsEnabled">multipleWriteLocationsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#multiple_write_locations_enabled CosmosdbAccount#multiple_write_locations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassForAzureServices">networkAclBypassForAzureServices</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassIds">networkAclBypassIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.partitionMergeEnabled">partitionMergeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#partition_merge_enabled CosmosdbAccount#partition_merge_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.restore">restore</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | restore block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.virtualNetworkRule">virtualNetworkRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>[]</code> | virtual_network_rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `consistencyPolicy`<sup>Required</sup> <a name="consistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.consistencyPolicy"></a>

```typescript
public readonly consistencyPolicy: CosmosdbAccountConsistencyPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

consistency_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#consistency_policy CosmosdbAccount#consistency_policy}

---

##### `geoLocation`<sup>Required</sup> <a name="geoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.geoLocation"></a>

```typescript
public readonly geoLocation: IResolvable | CosmosdbAccountGeoLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>[]

geo_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#geo_location CosmosdbAccount#geo_location}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `offerType`<sup>Required</sup> <a name="offerType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.offerType"></a>

```typescript
public readonly offerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}.

---

##### `accessKeyMetadataWritesEnabled`<sup>Optional</sup> <a name="accessKeyMetadataWritesEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.accessKeyMetadataWritesEnabled"></a>

```typescript
public readonly accessKeyMetadataWritesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}.

---

##### `analyticalStorage`<sup>Optional</sup> <a name="analyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorage"></a>

```typescript
public readonly analyticalStorage: CosmosdbAccountAnalyticalStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

analytical_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#analytical_storage CosmosdbAccount#analytical_storage}

---

##### `analyticalStorageEnabled`<sup>Optional</sup> <a name="analyticalStorageEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorageEnabled"></a>

```typescript
public readonly analyticalStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}.

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#automatic_failover_enabled CosmosdbAccount#automatic_failover_enabled}.

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.backup"></a>

```typescript
public readonly backup: CosmosdbAccountBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#backup CosmosdbAccount#backup}

---

##### `burstCapacityEnabled`<sup>Optional</sup> <a name="burstCapacityEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.burstCapacityEnabled"></a>

```typescript
public readonly burstCapacityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#burst_capacity_enabled CosmosdbAccount#burst_capacity_enabled}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capabilities"></a>

```typescript
public readonly capabilities: IResolvable | CosmosdbAccountCapabilities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>[]

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#capabilities CosmosdbAccount#capabilities}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capacity"></a>

```typescript
public readonly capacity: CosmosdbAccountCapacity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#capacity CosmosdbAccount#capacity}

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.corsRule"></a>

```typescript
public readonly corsRule: CosmosdbAccountCorsRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#cors_rule CosmosdbAccount#cors_rule}

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}.

---

##### `defaultIdentityType`<sup>Optional</sup> <a name="defaultIdentityType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.defaultIdentityType"></a>

```typescript
public readonly defaultIdentityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}.

---

##### `freeTierEnabled`<sup>Optional</sup> <a name="freeTierEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.freeTierEnabled"></a>

```typescript
public readonly freeTierEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#free_tier_enabled CosmosdbAccount#free_tier_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.identity"></a>

```typescript
public readonly identity: CosmosdbAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#identity CosmosdbAccount#identity}

---

##### `ipRangeFilter`<sup>Optional</sup> <a name="ipRangeFilter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.ipRangeFilter"></a>

```typescript
public readonly ipRangeFilter: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}.

---

##### `isVirtualNetworkFilterEnabled`<sup>Optional</sup> <a name="isVirtualNetworkFilterEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.isVirtualNetworkFilterEnabled"></a>

```typescript
public readonly isVirtualNetworkFilterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}.

---

##### `localAuthenticationDisabled`<sup>Optional</sup> <a name="localAuthenticationDisabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.localAuthenticationDisabled"></a>

```typescript
public readonly localAuthenticationDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}.

---

##### `managedHsmKeyId`<sup>Optional</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.managedHsmKeyId"></a>

```typescript
public readonly managedHsmKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#managed_hsm_key_id CosmosdbAccount#managed_hsm_key_id}.

---

##### `minimalTlsVersion`<sup>Optional</sup> <a name="minimalTlsVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.minimalTlsVersion"></a>

```typescript
public readonly minimalTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#minimal_tls_version CosmosdbAccount#minimal_tls_version}.

---

##### `mongoServerVersion`<sup>Optional</sup> <a name="mongoServerVersion" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.mongoServerVersion"></a>

```typescript
public readonly mongoServerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}.

---

##### `multipleWriteLocationsEnabled`<sup>Optional</sup> <a name="multipleWriteLocationsEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.multipleWriteLocationsEnabled"></a>

```typescript
public readonly multipleWriteLocationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#multiple_write_locations_enabled CosmosdbAccount#multiple_write_locations_enabled}.

---

##### `networkAclBypassForAzureServices`<sup>Optional</sup> <a name="networkAclBypassForAzureServices" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassForAzureServices"></a>

```typescript
public readonly networkAclBypassForAzureServices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}.

---

##### `networkAclBypassIds`<sup>Optional</sup> <a name="networkAclBypassIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassIds"></a>

```typescript
public readonly networkAclBypassIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}.

---

##### `partitionMergeEnabled`<sup>Optional</sup> <a name="partitionMergeEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.partitionMergeEnabled"></a>

```typescript
public readonly partitionMergeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#partition_merge_enabled CosmosdbAccount#partition_merge_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}.

---

##### `restore`<sup>Optional</sup> <a name="restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.restore"></a>

```typescript
public readonly restore: CosmosdbAccountRestore;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#restore CosmosdbAccount#restore}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbAccountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#timeouts CosmosdbAccount#timeouts}

---

##### `virtualNetworkRule`<sup>Optional</sup> <a name="virtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.virtualNetworkRule"></a>

```typescript
public readonly virtualNetworkRule: IResolvable | CosmosdbAccountVirtualNetworkRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>[]

virtual_network_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#virtual_network_rule CosmosdbAccount#virtual_network_rule}

---

### CosmosdbAccountConsistencyPolicy <a name="CosmosdbAccountConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountConsistencyPolicy: cosmosdbAccount.CosmosdbAccountConsistencyPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.consistencyLevel">consistencyLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxIntervalInSeconds">maxIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxStalenessPrefix">maxStalenessPrefix</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}. |

---

##### `consistencyLevel`<sup>Required</sup> <a name="consistencyLevel" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.consistencyLevel"></a>

```typescript
public readonly consistencyLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}.

---

##### `maxIntervalInSeconds`<sup>Optional</sup> <a name="maxIntervalInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxIntervalInSeconds"></a>

```typescript
public readonly maxIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}.

---

##### `maxStalenessPrefix`<sup>Optional</sup> <a name="maxStalenessPrefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxStalenessPrefix"></a>

```typescript
public readonly maxStalenessPrefix: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}.

---

### CosmosdbAccountCorsRule <a name="CosmosdbAccountCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountCorsRule: cosmosdbAccount.CosmosdbAccountCorsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Optional</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}.

---

### CosmosdbAccountGeoLocation <a name="CosmosdbAccountGeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountGeoLocation: cosmosdbAccount.CosmosdbAccountGeoLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.failoverPriority">failoverPriority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#failover_priority CosmosdbAccount#failover_priority}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#zone_redundant CosmosdbAccount#zone_redundant}. |

---

##### `failoverPriority`<sup>Required</sup> <a name="failoverPriority" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.failoverPriority"></a>

```typescript
public readonly failoverPriority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#failover_priority CosmosdbAccount#failover_priority}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}.

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#zone_redundant CosmosdbAccount#zone_redundant}.

---

### CosmosdbAccountIdentity <a name="CosmosdbAccountIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountIdentity: cosmosdbAccount.CosmosdbAccountIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}.

---

### CosmosdbAccountRestore <a name="CosmosdbAccountRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountRestore: cosmosdbAccount.CosmosdbAccountRestore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.restoreTimestampInUtc">restoreTimestampInUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.sourceCosmosdbAccountId">sourceCosmosdbAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.database">database</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>[]</code> | database block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.gremlinDatabase">gremlinDatabase</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase">CosmosdbAccountRestoreGremlinDatabase</a>[]</code> | gremlin_database block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.tablesToRestore">tablesToRestore</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#tables_to_restore CosmosdbAccount#tables_to_restore}. |

---

##### `restoreTimestampInUtc`<sup>Required</sup> <a name="restoreTimestampInUtc" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.restoreTimestampInUtc"></a>

```typescript
public readonly restoreTimestampInUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}.

---

##### `sourceCosmosdbAccountId`<sup>Required</sup> <a name="sourceCosmosdbAccountId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.sourceCosmosdbAccountId"></a>

```typescript
public readonly sourceCosmosdbAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.database"></a>

```typescript
public readonly database: IResolvable | CosmosdbAccountRestoreDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>[]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#database CosmosdbAccount#database}

---

##### `gremlinDatabase`<sup>Optional</sup> <a name="gremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.gremlinDatabase"></a>

```typescript
public readonly gremlinDatabase: IResolvable | CosmosdbAccountRestoreGremlinDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase">CosmosdbAccountRestoreGremlinDatabase</a>[]

gremlin_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#gremlin_database CosmosdbAccount#gremlin_database}

---

##### `tablesToRestore`<sup>Optional</sup> <a name="tablesToRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.tablesToRestore"></a>

```typescript
public readonly tablesToRestore: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#tables_to_restore CosmosdbAccount#tables_to_restore}.

---

### CosmosdbAccountRestoreDatabase <a name="CosmosdbAccountRestoreDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountRestoreDatabase: cosmosdbAccount.CosmosdbAccountRestoreDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.collectionNames">collectionNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#collection_names CosmosdbAccount#collection_names}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `collectionNames`<sup>Optional</sup> <a name="collectionNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.collectionNames"></a>

```typescript
public readonly collectionNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#collection_names CosmosdbAccount#collection_names}.

---

### CosmosdbAccountRestoreGremlinDatabase <a name="CosmosdbAccountRestoreGremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountRestoreGremlinDatabase: cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.property.graphNames">graphNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#graph_names CosmosdbAccount#graph_names}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `graphNames`<sup>Optional</sup> <a name="graphNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase.property.graphNames"></a>

```typescript
public readonly graphNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#graph_names CosmosdbAccount#graph_names}.

---

### CosmosdbAccountTimeouts <a name="CosmosdbAccountTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountTimeouts: cosmosdbAccount.CosmosdbAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#create CosmosdbAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#delete CosmosdbAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#read CosmosdbAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#update CosmosdbAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#create CosmosdbAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#delete CosmosdbAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#read CosmosdbAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#update CosmosdbAccount#update}.

---

### CosmosdbAccountVirtualNetworkRule <a name="CosmosdbAccountVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

const cosmosdbAccountVirtualNetworkRule: cosmosdbAccount.CosmosdbAccountVirtualNetworkRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/cosmosdb_account#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbAccountAnalyticalStorageOutputReference <a name="CosmosdbAccountAnalyticalStorageOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaTypeInput">schemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaType">schemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaTypeInput`<sup>Optional</sup> <a name="schemaTypeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaTypeInput"></a>

```typescript
public readonly schemaTypeInput: string;
```

- *Type:* string

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbAccountAnalyticalStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---


### CosmosdbAccountBackupOutputReference <a name="CosmosdbAccountBackupOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetIntervalInMinutes">resetIntervalInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetRetentionInHours">resetRetentionInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetStorageRedundancy">resetStorageRedundancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetTier">resetTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalInMinutes` <a name="resetIntervalInMinutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetIntervalInMinutes"></a>

```typescript
public resetIntervalInMinutes(): void
```

##### `resetRetentionInHours` <a name="resetRetentionInHours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetRetentionInHours"></a>

```typescript
public resetRetentionInHours(): void
```

##### `resetStorageRedundancy` <a name="resetStorageRedundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetStorageRedundancy"></a>

```typescript
public resetStorageRedundancy(): void
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetTier"></a>

```typescript
public resetTier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutesInput">intervalInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHoursInput">retentionInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancyInput">storageRedundancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHours">retentionInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancy">storageRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInMinutesInput`<sup>Optional</sup> <a name="intervalInMinutesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutesInput"></a>

```typescript
public readonly intervalInMinutesInput: number;
```

- *Type:* number

---

##### `retentionInHoursInput`<sup>Optional</sup> <a name="retentionInHoursInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHoursInput"></a>

```typescript
public readonly retentionInHoursInput: number;
```

- *Type:* number

---

##### `storageRedundancyInput`<sup>Optional</sup> <a name="storageRedundancyInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancyInput"></a>

```typescript
public readonly storageRedundancyInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---

##### `retentionInHours`<sup>Required</sup> <a name="retentionInHours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHours"></a>

```typescript
public readonly retentionInHours: number;
```

- *Type:* number

---

##### `storageRedundancy`<sup>Required</sup> <a name="storageRedundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancy"></a>

```typescript
public readonly storageRedundancy: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbAccountBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---


### CosmosdbAccountCapabilitiesList <a name="CosmosdbAccountCapabilitiesList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get"></a>

```typescript
public get(index: number): CosmosdbAccountCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountCapabilities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>[]

---


### CosmosdbAccountCapabilitiesOutputReference <a name="CosmosdbAccountCapabilitiesOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountCapabilities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>

---


### CosmosdbAccountCapacityOutputReference <a name="CosmosdbAccountCapacityOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimitInput">totalThroughputLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimit">totalThroughputLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalThroughputLimitInput`<sup>Optional</sup> <a name="totalThroughputLimitInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimitInput"></a>

```typescript
public readonly totalThroughputLimitInput: number;
```

- *Type:* number

---

##### `totalThroughputLimit`<sup>Required</sup> <a name="totalThroughputLimit" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimit"></a>

```typescript
public readonly totalThroughputLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbAccountCapacity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---


### CosmosdbAccountConsistencyPolicyOutputReference <a name="CosmosdbAccountConsistencyPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxIntervalInSeconds">resetMaxIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxStalenessPrefix">resetMaxStalenessPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxIntervalInSeconds` <a name="resetMaxIntervalInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxIntervalInSeconds"></a>

```typescript
public resetMaxIntervalInSeconds(): void
```

##### `resetMaxStalenessPrefix` <a name="resetMaxStalenessPrefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxStalenessPrefix"></a>

```typescript
public resetMaxStalenessPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevelInput">consistencyLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSecondsInput">maxIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefixInput">maxStalenessPrefixInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevel">consistencyLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSeconds">maxIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefix">maxStalenessPrefix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consistencyLevelInput`<sup>Optional</sup> <a name="consistencyLevelInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevelInput"></a>

```typescript
public readonly consistencyLevelInput: string;
```

- *Type:* string

---

##### `maxIntervalInSecondsInput`<sup>Optional</sup> <a name="maxIntervalInSecondsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSecondsInput"></a>

```typescript
public readonly maxIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `maxStalenessPrefixInput`<sup>Optional</sup> <a name="maxStalenessPrefixInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefixInput"></a>

```typescript
public readonly maxStalenessPrefixInput: number;
```

- *Type:* number

---

##### `consistencyLevel`<sup>Required</sup> <a name="consistencyLevel" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevel"></a>

```typescript
public readonly consistencyLevel: string;
```

- *Type:* string

---

##### `maxIntervalInSeconds`<sup>Required</sup> <a name="maxIntervalInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSeconds"></a>

```typescript
public readonly maxIntervalInSeconds: number;
```

- *Type:* number

---

##### `maxStalenessPrefix`<sup>Required</sup> <a name="maxStalenessPrefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefix"></a>

```typescript
public readonly maxStalenessPrefix: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbAccountConsistencyPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---


### CosmosdbAccountCorsRuleOutputReference <a name="CosmosdbAccountCorsRuleOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resetMaxAgeInSeconds">resetMaxAgeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAgeInSeconds` <a name="resetMaxAgeInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resetMaxAgeInSeconds"></a>

```typescript
public resetMaxAgeInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeadersInput"></a>

```typescript
public readonly exposedHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```typescript
public readonly maxAgeInSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbAccountCorsRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---


### CosmosdbAccountGeoLocationList <a name="CosmosdbAccountGeoLocationList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountGeoLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get"></a>

```typescript
public get(index: number): CosmosdbAccountGeoLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountGeoLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>[]

---


### CosmosdbAccountGeoLocationOutputReference <a name="CosmosdbAccountGeoLocationOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resetZoneRedundant">resetZoneRedundant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetZoneRedundant` <a name="resetZoneRedundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resetZoneRedundant"></a>

```typescript
public resetZoneRedundant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriorityInput">failoverPriorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundantInput">zoneRedundantInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriority">failoverPriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `failoverPriorityInput`<sup>Optional</sup> <a name="failoverPriorityInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriorityInput"></a>

```typescript
public readonly failoverPriorityInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `zoneRedundantInput`<sup>Optional</sup> <a name="zoneRedundantInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundantInput"></a>

```typescript
public readonly zoneRedundantInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failoverPriority`<sup>Required</sup> <a name="failoverPriority" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriority"></a>

```typescript
public readonly failoverPriority: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountGeoLocation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>

---


### CosmosdbAccountIdentityOutputReference <a name="CosmosdbAccountIdentityOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---


### CosmosdbAccountRestoreDatabaseList <a name="CosmosdbAccountRestoreDatabaseList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountRestoreDatabaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get"></a>

```typescript
public get(index: number): CosmosdbAccountRestoreDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountRestoreDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>[]

---


### CosmosdbAccountRestoreDatabaseOutputReference <a name="CosmosdbAccountRestoreDatabaseOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resetCollectionNames">resetCollectionNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCollectionNames` <a name="resetCollectionNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resetCollectionNames"></a>

```typescript
public resetCollectionNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNamesInput">collectionNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNames">collectionNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionNamesInput`<sup>Optional</sup> <a name="collectionNamesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNamesInput"></a>

```typescript
public readonly collectionNamesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `collectionNames`<sup>Required</sup> <a name="collectionNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNames"></a>

```typescript
public readonly collectionNames: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountRestoreDatabase;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>

---


### CosmosdbAccountRestoreGremlinDatabaseList <a name="CosmosdbAccountRestoreGremlinDatabaseList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.get"></a>

```typescript
public get(index: number): CosmosdbAccountRestoreGremlinDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase">CosmosdbAccountRestoreGremlinDatabase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountRestoreGremlinDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase">CosmosdbAccountRestoreGremlinDatabase</a>[]

---


### CosmosdbAccountRestoreGremlinDatabaseOutputReference <a name="CosmosdbAccountRestoreGremlinDatabaseOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resetGraphNames">resetGraphNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGraphNames` <a name="resetGraphNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.resetGraphNames"></a>

```typescript
public resetGraphNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.graphNamesInput">graphNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.graphNames">graphNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase">CosmosdbAccountRestoreGremlinDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `graphNamesInput`<sup>Optional</sup> <a name="graphNamesInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.graphNamesInput"></a>

```typescript
public readonly graphNamesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `graphNames`<sup>Required</sup> <a name="graphNames" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.graphNames"></a>

```typescript
public readonly graphNames: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountRestoreGremlinDatabase;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase">CosmosdbAccountRestoreGremlinDatabase</a>

---


### CosmosdbAccountRestoreOutputReference <a name="CosmosdbAccountRestoreOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountRestoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putGremlinDatabase">putGremlinDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetGremlinDatabase">resetGremlinDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetTablesToRestore">resetTablesToRestore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase"></a>

```typescript
public putDatabase(value: IResolvable | CosmosdbAccountRestoreDatabase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>[]

---

##### `putGremlinDatabase` <a name="putGremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putGremlinDatabase"></a>

```typescript
public putGremlinDatabase(value: IResolvable | CosmosdbAccountRestoreGremlinDatabase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putGremlinDatabase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase">CosmosdbAccountRestoreGremlinDatabase</a>[]

---

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetGremlinDatabase` <a name="resetGremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetGremlinDatabase"></a>

```typescript
public resetGremlinDatabase(): void
```

##### `resetTablesToRestore` <a name="resetTablesToRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetTablesToRestore"></a>

```typescript
public resetTablesToRestore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.database">database</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList">CosmosdbAccountRestoreDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.gremlinDatabase">gremlinDatabase</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList">CosmosdbAccountRestoreGremlinDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.databaseInput">databaseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.gremlinDatabaseInput">gremlinDatabaseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase">CosmosdbAccountRestoreGremlinDatabase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtcInput">restoreTimestampInUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountIdInput">sourceCosmosdbAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.tablesToRestoreInput">tablesToRestoreInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtc">restoreTimestampInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountId">sourceCosmosdbAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.tablesToRestore">tablesToRestore</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.database"></a>

```typescript
public readonly database: CosmosdbAccountRestoreDatabaseList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList">CosmosdbAccountRestoreDatabaseList</a>

---

##### `gremlinDatabase`<sup>Required</sup> <a name="gremlinDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.gremlinDatabase"></a>

```typescript
public readonly gremlinDatabase: CosmosdbAccountRestoreGremlinDatabaseList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabaseList">CosmosdbAccountRestoreGremlinDatabaseList</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | CosmosdbAccountRestoreDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>[]

---

##### `gremlinDatabaseInput`<sup>Optional</sup> <a name="gremlinDatabaseInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.gremlinDatabaseInput"></a>

```typescript
public readonly gremlinDatabaseInput: IResolvable | CosmosdbAccountRestoreGremlinDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreGremlinDatabase">CosmosdbAccountRestoreGremlinDatabase</a>[]

---

##### `restoreTimestampInUtcInput`<sup>Optional</sup> <a name="restoreTimestampInUtcInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtcInput"></a>

```typescript
public readonly restoreTimestampInUtcInput: string;
```

- *Type:* string

---

##### `sourceCosmosdbAccountIdInput`<sup>Optional</sup> <a name="sourceCosmosdbAccountIdInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountIdInput"></a>

```typescript
public readonly sourceCosmosdbAccountIdInput: string;
```

- *Type:* string

---

##### `tablesToRestoreInput`<sup>Optional</sup> <a name="tablesToRestoreInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.tablesToRestoreInput"></a>

```typescript
public readonly tablesToRestoreInput: string[];
```

- *Type:* string[]

---

##### `restoreTimestampInUtc`<sup>Required</sup> <a name="restoreTimestampInUtc" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtc"></a>

```typescript
public readonly restoreTimestampInUtc: string;
```

- *Type:* string

---

##### `sourceCosmosdbAccountId`<sup>Required</sup> <a name="sourceCosmosdbAccountId" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountId"></a>

```typescript
public readonly sourceCosmosdbAccountId: string;
```

- *Type:* string

---

##### `tablesToRestore`<sup>Required</sup> <a name="tablesToRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.tablesToRestore"></a>

```typescript
public readonly tablesToRestore: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbAccountRestore;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---


### CosmosdbAccountTimeoutsOutputReference <a name="CosmosdbAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

---


### CosmosdbAccountVirtualNetworkRuleList <a name="CosmosdbAccountVirtualNetworkRuleList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get"></a>

```typescript
public get(index: number): CosmosdbAccountVirtualNetworkRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountVirtualNetworkRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>[]

---


### CosmosdbAccountVirtualNetworkRuleOutputReference <a name="CosmosdbAccountVirtualNetworkRuleOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer"></a>

```typescript
import { cosmosdbAccount } from '@cdktf/provider-azurerm'

new cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resetIgnoreMissingVnetServiceEndpoint">resetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreMissingVnetServiceEndpoint` <a name="resetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```typescript
public resetIgnoreMissingVnetServiceEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpointInput">ignoreMissingVnetServiceEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbAccountVirtualNetworkRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>

---



