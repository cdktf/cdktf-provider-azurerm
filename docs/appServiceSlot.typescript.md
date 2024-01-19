# `appServiceSlot` Submodule <a name="`appServiceSlot` Submodule" id="@cdktf/provider-azurerm.appServiceSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSlot <a name="AppServiceSlot" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot azurerm_app_service_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlot(scope: Construct, id: string, config: AppServiceSlotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig">AppServiceSlotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig">AppServiceSlotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings">putAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAuthSettings">resetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetClientAffinityEnabled">resetClientAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetKeyVaultReferenceIdentityId">resetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetSiteConfig">resetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthSettings` <a name="putAuthSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings"></a>

```typescript
public putAuthSettings(value: AppServiceSlotAuthSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putConnectionString"></a>

```typescript
public putConnectionString(value: IResolvable | AppServiceSlotConnectionString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putConnectionString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity"></a>

```typescript
public putIdentity(value: AppServiceSlotIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

---

##### `putLogs` <a name="putLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs"></a>

```typescript
public putLogs(value: AppServiceSlotLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig"></a>

```typescript
public putSiteConfig(value: AppServiceSlotSiteConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putStorageAccount"></a>

```typescript
public putStorageAccount(value: IResolvable | AppServiceSlotStorageAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putStorageAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceSlotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAppSettings"></a>

```typescript
public resetAppSettings(): void
```

##### `resetAuthSettings` <a name="resetAuthSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAuthSettings"></a>

```typescript
public resetAuthSettings(): void
```

##### `resetClientAffinityEnabled` <a name="resetClientAffinityEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetClientAffinityEnabled"></a>

```typescript
public resetClientAffinityEnabled(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetHttpsOnly"></a>

```typescript
public resetHttpsOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKeyVaultReferenceIdentityId` <a name="resetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetKeyVaultReferenceIdentityId"></a>

```typescript
public resetKeyVaultReferenceIdentityId(): void
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetLogs"></a>

```typescript
public resetLogs(): void
```

##### `resetSiteConfig` <a name="resetSiteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetSiteConfig"></a>

```typescript
public resetSiteConfig(): void
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetStorageAccount"></a>

```typescript
public resetStorageAccount(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceSlot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isConstruct"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

appServiceSlot.AppServiceSlot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformElement"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

appServiceSlot.AppServiceSlot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformResource"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

appServiceSlot.AppServiceSlot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

appServiceSlot.AppServiceSlot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppServiceSlot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceSlot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceSlot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceSlot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference">AppServiceSlotAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList">AppServiceSlotConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.defaultSiteHostname">defaultSiteHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference">AppServiceSlotIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference">AppServiceSlotLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference">AppServiceSlotSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList">AppServiceSlotSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList">AppServiceSlotStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference">AppServiceSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceNameInput">appServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanIdInput">appServicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettingsInput">appSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettingsInput">authSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabledInput">clientAffinityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionStringInput">connectionStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityIdInput">keyVaultReferenceIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logsInput">logsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccountInput">storageAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceName">appServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanId">appServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettings"></a>

```typescript
public readonly authSettings: AppServiceSlotAuthSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference">AppServiceSlotAuthSettingsOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionString"></a>

```typescript
public readonly connectionString: AppServiceSlotConnectionStringList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList">AppServiceSlotConnectionStringList</a>

---

##### `defaultSiteHostname`<sup>Required</sup> <a name="defaultSiteHostname" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.defaultSiteHostname"></a>

```typescript
public readonly defaultSiteHostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identity"></a>

```typescript
public readonly identity: AppServiceSlotIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference">AppServiceSlotIdentityOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logs"></a>

```typescript
public readonly logs: AppServiceSlotLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference">AppServiceSlotLogsOutputReference</a>

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfig"></a>

```typescript
public readonly siteConfig: AppServiceSlotSiteConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference">AppServiceSlotSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteCredential"></a>

```typescript
public readonly siteCredential: AppServiceSlotSiteCredentialList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList">AppServiceSlotSiteCredentialList</a>

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccount"></a>

```typescript
public readonly storageAccount: AppServiceSlotStorageAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList">AppServiceSlotStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceSlotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference">AppServiceSlotTimeoutsOutputReference</a>

---

##### `appServiceNameInput`<sup>Optional</sup> <a name="appServiceNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceNameInput"></a>

```typescript
public readonly appServiceNameInput: string;
```

- *Type:* string

---

##### `appServicePlanIdInput`<sup>Optional</sup> <a name="appServicePlanIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanIdInput"></a>

```typescript
public readonly appServicePlanIdInput: string;
```

- *Type:* string

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettingsInput"></a>

```typescript
public readonly appSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authSettingsInput`<sup>Optional</sup> <a name="authSettingsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettingsInput"></a>

```typescript
public readonly authSettingsInput: AppServiceSlotAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

---

##### `clientAffinityEnabledInput`<sup>Optional</sup> <a name="clientAffinityEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabledInput"></a>

```typescript
public readonly clientAffinityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: IResolvable | AppServiceSlotConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnlyInput"></a>

```typescript
public readonly httpsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identityInput"></a>

```typescript
public readonly identityInput: AppServiceSlotIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="keyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityIdInput"></a>

```typescript
public readonly keyVaultReferenceIdentityIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logsInput"></a>

```typescript
public readonly logsInput: AppServiceSlotLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfigInput"></a>

```typescript
public readonly siteConfigInput: AppServiceSlotSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: IResolvable | AppServiceSlotStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceSlotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>

---

##### `appServiceName`<sup>Required</sup> <a name="appServiceName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceName"></a>

```typescript
public readonly appServiceName: string;
```

- *Type:* string

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanId"></a>

```typescript
public readonly appServicePlanId: string;
```

- *Type:* string

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientAffinityEnabled`<sup>Required</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabled"></a>

```typescript
public readonly clientAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityId`<sup>Required</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSlotAuthSettings <a name="AppServiceSlotAuthSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotAuthSettings: appServiceSlot.AppServiceSlotAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.additionalLoginParams">additionalLoginParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#additional_login_params AppServiceSlot#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#allowed_external_redirect_urls AppServiceSlot#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#default_provider AppServiceSlot#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#issuer AppServiceSlot#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#runtime_version AppServiceSlot#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#token_refresh_extension_hours AppServiceSlot#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#token_store_enabled AppServiceSlot#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#unauthenticated_client_action AppServiceSlot#unauthenticated_client_action}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}.

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: AppServiceSlotAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#active_directory AppServiceSlot#active_directory}

---

##### `additionalLoginParams`<sup>Optional</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.additionalLoginParams"></a>

```typescript
public readonly additionalLoginParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#additional_login_params AppServiceSlot#additional_login_params}.

---

##### `allowedExternalRedirectUrls`<sup>Optional</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#allowed_external_redirect_urls AppServiceSlot#allowed_external_redirect_urls}.

---

##### `defaultProvider`<sup>Optional</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#default_provider AppServiceSlot#default_provider}.

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.facebook"></a>

```typescript
public readonly facebook: AppServiceSlotAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#facebook AppServiceSlot#facebook}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.google"></a>

```typescript
public readonly google: AppServiceSlotAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#google AppServiceSlot#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#issuer AppServiceSlot#issuer}.

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.microsoft"></a>

```typescript
public readonly microsoft: AppServiceSlotAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#microsoft AppServiceSlot#microsoft}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#runtime_version AppServiceSlot#runtime_version}.

---

##### `tokenRefreshExtensionHours`<sup>Optional</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#token_refresh_extension_hours AppServiceSlot#token_refresh_extension_hours}.

---

##### `tokenStoreEnabled`<sup>Optional</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#token_store_enabled AppServiceSlot#token_store_enabled}.

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.twitter"></a>

```typescript
public readonly twitter: AppServiceSlotAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#twitter AppServiceSlot#twitter}

---

##### `unauthenticatedClientAction`<sup>Optional</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#unauthenticated_client_action AppServiceSlot#unauthenticated_client_action}.

---

### AppServiceSlotAuthSettingsActiveDirectory <a name="AppServiceSlotAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotAuthSettingsActiveDirectory: appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#allowed_audiences AppServiceSlot#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#allowed_audiences AppServiceSlot#allowed_audiences}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

### AppServiceSlotAuthSettingsFacebook <a name="AppServiceSlotAuthSettingsFacebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotAuthSettingsFacebook: appServiceSlot.AppServiceSlotAuthSettingsFacebook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_id AppServiceSlot#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appSecret">appSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_secret AppServiceSlot#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_id AppServiceSlot#app_id}.

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_secret AppServiceSlot#app_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

### AppServiceSlotAuthSettingsGoogle <a name="AppServiceSlotAuthSettingsGoogle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotAuthSettingsGoogle: appServiceSlot.AppServiceSlotAuthSettingsGoogle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

### AppServiceSlotAuthSettingsMicrosoft <a name="AppServiceSlotAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotAuthSettingsMicrosoft: appServiceSlot.AppServiceSlotAuthSettingsMicrosoft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

### AppServiceSlotAuthSettingsTwitter <a name="AppServiceSlotAuthSettingsTwitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotAuthSettingsTwitter: appServiceSlot.AppServiceSlotAuthSettingsTwitter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerKey">consumerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#consumer_key AppServiceSlot#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#consumer_secret AppServiceSlot#consumer_secret}. |

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#consumer_key AppServiceSlot#consumer_key}.

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#consumer_secret AppServiceSlot#consumer_secret}.

---

### AppServiceSlotConfig <a name="AppServiceSlotConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotConfig: appServiceSlot.AppServiceSlotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServiceName">appServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_service_name AppServiceSlot#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServicePlanId">appServicePlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_service_plan_id AppServiceSlot#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#location AppServiceSlot#location}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#resource_group_name AppServiceSlot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_settings AppServiceSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_affinity_enabled AppServiceSlot#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connectionString">connectionString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>[]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#https_only AppServiceSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#id AppServiceSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#key_vault_reference_identity_id AppServiceSlot#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.storageAccount">storageAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>[]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#tags AppServiceSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appServiceName`<sup>Required</sup> <a name="appServiceName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServiceName"></a>

```typescript
public readonly appServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_service_name AppServiceSlot#app_service_name}.

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServicePlanId"></a>

```typescript
public readonly appServicePlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_service_plan_id AppServiceSlot#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#location AppServiceSlot#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#resource_group_name AppServiceSlot#resource_group_name}.

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_settings AppServiceSlot#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.authSettings"></a>

```typescript
public readonly authSettings: AppServiceSlotAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#auth_settings AppServiceSlot#auth_settings}

---

##### `clientAffinityEnabled`<sup>Optional</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.clientAffinityEnabled"></a>

```typescript
public readonly clientAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#client_affinity_enabled AppServiceSlot#client_affinity_enabled}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connectionString"></a>

```typescript
public readonly connectionString: IResolvable | AppServiceSlotConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>[]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#connection_string AppServiceSlot#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#https_only AppServiceSlot#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#id AppServiceSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.identity"></a>

```typescript
public readonly identity: AppServiceSlotIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#identity AppServiceSlot#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#key_vault_reference_identity_id AppServiceSlot#key_vault_reference_identity_id}.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.logs"></a>

```typescript
public readonly logs: AppServiceSlotLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#logs AppServiceSlot#logs}

---

##### `siteConfig`<sup>Optional</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.siteConfig"></a>

```typescript
public readonly siteConfig: AppServiceSlotSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#site_config AppServiceSlot#site_config}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: IResolvable | AppServiceSlotStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>[]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#storage_account AppServiceSlot#storage_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#tags AppServiceSlot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceSlotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#timeouts AppServiceSlot#timeouts}

---

### AppServiceSlotConnectionString <a name="AppServiceSlotConnectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotConnectionString: appServiceSlot.AppServiceSlotConnectionString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#type AppServiceSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#value AppServiceSlot#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#value AppServiceSlot#value}.

---

### AppServiceSlotIdentity <a name="AppServiceSlotIdentity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotIdentity: appServiceSlot.AppServiceSlotIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#type AppServiceSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#identity_ids AppServiceSlot#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#identity_ids AppServiceSlot#identity_ids}.

---

### AppServiceSlotLogs <a name="AppServiceSlotLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotLogs: appServiceSlot.AppServiceSlotLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a></code> | application_logs block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.detailedErrorMessagesEnabled">detailedErrorMessagesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#detailed_error_messages_enabled AppServiceSlot#detailed_error_messages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.failedRequestTracingEnabled">failedRequestTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#failed_request_tracing_enabled AppServiceSlot#failed_request_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.httpLogs">httpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a></code> | http_logs block. |

---

##### `applicationLogs`<sup>Optional</sup> <a name="applicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: AppServiceSlotLogsApplicationLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

application_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#application_logs AppServiceSlot#application_logs}

---

##### `detailedErrorMessagesEnabled`<sup>Optional</sup> <a name="detailedErrorMessagesEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.detailedErrorMessagesEnabled"></a>

```typescript
public readonly detailedErrorMessagesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#detailed_error_messages_enabled AppServiceSlot#detailed_error_messages_enabled}.

---

##### `failedRequestTracingEnabled`<sup>Optional</sup> <a name="failedRequestTracingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.failedRequestTracingEnabled"></a>

```typescript
public readonly failedRequestTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#failed_request_tracing_enabled AppServiceSlot#failed_request_tracing_enabled}.

---

##### `httpLogs`<sup>Optional</sup> <a name="httpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.httpLogs"></a>

```typescript
public readonly httpLogs: AppServiceSlotLogsHttpLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

http_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#http_logs AppServiceSlot#http_logs}

---

### AppServiceSlotLogsApplicationLogs <a name="AppServiceSlotLogsApplicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotLogsApplicationLogs: appServiceSlot.AppServiceSlotLogsApplicationLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.fileSystemLevel">fileSystemLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#file_system_level AppServiceSlot#file_system_level}. |

---

##### `azureBlobStorage`<sup>Optional</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: AppServiceSlotLogsApplicationLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#azure_blob_storage AppServiceSlot#azure_blob_storage}

---

##### `fileSystemLevel`<sup>Optional</sup> <a name="fileSystemLevel" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.fileSystemLevel"></a>

```typescript
public readonly fileSystemLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#file_system_level AppServiceSlot#file_system_level}.

---

### AppServiceSlotLogsApplicationLogsAzureBlobStorage <a name="AppServiceSlotLogsApplicationLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotLogsApplicationLogsAzureBlobStorage: appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.level">level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#level AppServiceSlot#level}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.sasUrl">sasUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}. |

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#level AppServiceSlot#level}.

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}.

---

### AppServiceSlotLogsHttpLogs <a name="AppServiceSlotLogsHttpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotLogsHttpLogs: appServiceSlot.AppServiceSlotLogsHttpLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.fileSystem">fileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a></code> | file_system block. |

---

##### `azureBlobStorage`<sup>Optional</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: AppServiceSlotLogsHttpLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#azure_blob_storage AppServiceSlot#azure_blob_storage}

---

##### `fileSystem`<sup>Optional</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.fileSystem"></a>

```typescript
public readonly fileSystem: AppServiceSlotLogsHttpLogsFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#file_system AppServiceSlot#file_system}

---

### AppServiceSlotLogsHttpLogsAzureBlobStorage <a name="AppServiceSlotLogsHttpLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotLogsHttpLogsAzureBlobStorage: appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.sasUrl">sasUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}. |

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}.

---

### AppServiceSlotLogsHttpLogsFileSystem <a name="AppServiceSlotLogsHttpLogsFileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotLogsHttpLogsFileSystem: appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInMb">retentionInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#retention_in_mb AppServiceSlot#retention_in_mb}. |

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

##### `retentionInMb`<sup>Required</sup> <a name="retentionInMb" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInMb"></a>

```typescript
public readonly retentionInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#retention_in_mb AppServiceSlot#retention_in_mb}.

---

### AppServiceSlotSiteConfig <a name="AppServiceSlotSiteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotSiteConfig: appServiceSlot.AppServiceSlotSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUseManagedIdentityCredentials">acrUseManagedIdentityCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#acr_use_managed_identity_credentials AppServiceSlot#acr_use_managed_identity_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUserManagedIdentityClientId">acrUserManagedIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#acr_user_managed_identity_client_id AppServiceSlot#acr_user_managed_identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#always_on AppServiceSlot#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_command_line AppServiceSlot#app_command_line}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#auto_swap_slot_name AppServiceSlot#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#default_documents AppServiceSlot#default_documents}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#dotnet_framework_version AppServiceSlot#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ftpsState">ftpsState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#ftps_state AppServiceSlot#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#health_check_path AppServiceSlot#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#http2_enabled AppServiceSlot#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#ip_restriction AppServiceSlot#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainer">javaContainer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#java_container AppServiceSlot#java_container}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainerVersion">javaContainerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#java_container_version AppServiceSlot#java_container_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaVersion">javaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#java_version AppServiceSlot#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.linuxFxVersion">linuxFxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#linux_fx_version AppServiceSlot#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.localMysqlEnabled">localMysqlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#local_mysql_enabled AppServiceSlot#local_mysql_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#managed_pipeline_mode AppServiceSlot#managed_pipeline_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#min_tls_version AppServiceSlot#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#number_of_workers AppServiceSlot#number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.phpVersion">phpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#php_version AppServiceSlot#php_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#python_version AppServiceSlot#python_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#remote_debugging_enabled AppServiceSlot#remote_debugging_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#remote_debugging_version AppServiceSlot#remote_debugging_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#scm_ip_restriction AppServiceSlot#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmType">scmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#scm_type AppServiceSlot#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#scm_use_main_ip_restriction AppServiceSlot#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#use_32_bit_worker_process AppServiceSlot#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#vnet_route_all_enabled AppServiceSlot#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#websockets_enabled AppServiceSlot#websockets_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.windowsFxVersion">windowsFxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#windows_fx_version AppServiceSlot#windows_fx_version}. |

---

##### `acrUseManagedIdentityCredentials`<sup>Optional</sup> <a name="acrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUseManagedIdentityCredentials"></a>

```typescript
public readonly acrUseManagedIdentityCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#acr_use_managed_identity_credentials AppServiceSlot#acr_use_managed_identity_credentials}.

---

##### `acrUserManagedIdentityClientId`<sup>Optional</sup> <a name="acrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUserManagedIdentityClientId"></a>

```typescript
public readonly acrUserManagedIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#acr_user_managed_identity_client_id AppServiceSlot#acr_user_managed_identity_client_id}.

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#always_on AppServiceSlot#always_on}.

---

##### `appCommandLine`<sup>Optional</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#app_command_line AppServiceSlot#app_command_line}.

---

##### `autoSwapSlotName`<sup>Optional</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#auto_swap_slot_name AppServiceSlot#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.cors"></a>

```typescript
public readonly cors: AppServiceSlotSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#cors AppServiceSlot#cors}

---

##### `defaultDocuments`<sup>Optional</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#default_documents AppServiceSlot#default_documents}.

---

##### `dotnetFrameworkVersion`<sup>Optional</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.dotnetFrameworkVersion"></a>

```typescript
public readonly dotnetFrameworkVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#dotnet_framework_version AppServiceSlot#dotnet_framework_version}.

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#ftps_state AppServiceSlot#ftps_state}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#health_check_path AppServiceSlot#health_check_path}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#http2_enabled AppServiceSlot#http2_enabled}.

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: IResolvable | AppServiceSlotSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#ip_restriction AppServiceSlot#ip_restriction}.

---

##### `javaContainer`<sup>Optional</sup> <a name="javaContainer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainer"></a>

```typescript
public readonly javaContainer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#java_container AppServiceSlot#java_container}.

---

##### `javaContainerVersion`<sup>Optional</sup> <a name="javaContainerVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainerVersion"></a>

```typescript
public readonly javaContainerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#java_container_version AppServiceSlot#java_container_version}.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#java_version AppServiceSlot#java_version}.

---

##### `linuxFxVersion`<sup>Optional</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.linuxFxVersion"></a>

```typescript
public readonly linuxFxVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#linux_fx_version AppServiceSlot#linux_fx_version}.

---

##### `localMysqlEnabled`<sup>Optional</sup> <a name="localMysqlEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.localMysqlEnabled"></a>

```typescript
public readonly localMysqlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#local_mysql_enabled AppServiceSlot#local_mysql_enabled}.

---

##### `managedPipelineMode`<sup>Optional</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#managed_pipeline_mode AppServiceSlot#managed_pipeline_mode}.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#min_tls_version AppServiceSlot#min_tls_version}.

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#number_of_workers AppServiceSlot#number_of_workers}.

---

##### `phpVersion`<sup>Optional</sup> <a name="phpVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.phpVersion"></a>

```typescript
public readonly phpVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#php_version AppServiceSlot#php_version}.

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#python_version AppServiceSlot#python_version}.

---

##### `remoteDebuggingEnabled`<sup>Optional</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#remote_debugging_enabled AppServiceSlot#remote_debugging_enabled}.

---

##### `remoteDebuggingVersion`<sup>Optional</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#remote_debugging_version AppServiceSlot#remote_debugging_version}.

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: IResolvable | AppServiceSlotSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#scm_ip_restriction AppServiceSlot#scm_ip_restriction}.

---

##### `scmType`<sup>Optional</sup> <a name="scmType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#scm_type AppServiceSlot#scm_type}.

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#scm_use_main_ip_restriction AppServiceSlot#scm_use_main_ip_restriction}.

---

##### `use32BitWorkerProcess`<sup>Optional</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.use32BitWorkerProcess"></a>

```typescript
public readonly use32BitWorkerProcess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#use_32_bit_worker_process AppServiceSlot#use_32_bit_worker_process}.

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#vnet_route_all_enabled AppServiceSlot#vnet_route_all_enabled}.

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#websockets_enabled AppServiceSlot#websockets_enabled}.

---

##### `windowsFxVersion`<sup>Optional</sup> <a name="windowsFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.windowsFxVersion"></a>

```typescript
public readonly windowsFxVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#windows_fx_version AppServiceSlot#windows_fx_version}.

---

### AppServiceSlotSiteConfigCors <a name="AppServiceSlotSiteConfigCors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotSiteConfigCors: appServiceSlot.AppServiceSlotSiteConfigCors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#allowed_origins AppServiceSlot#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#support_credentials AppServiceSlot#support_credentials}. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#allowed_origins AppServiceSlot#allowed_origins}.

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#support_credentials AppServiceSlot#support_credentials}.

---

### AppServiceSlotSiteConfigIpRestriction <a name="AppServiceSlotSiteConfigIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotSiteConfigIpRestriction: appServiceSlot.AppServiceSlotSiteConfigIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#action AppServiceSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#action AppServiceSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | AppServiceSlotSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}.

---

### AppServiceSlotSiteConfigIpRestrictionHeaders <a name="AppServiceSlotSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotSiteConfigIpRestrictionHeaders: appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}.

---

### AppServiceSlotSiteConfigScmIpRestriction <a name="AppServiceSlotSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotSiteConfigScmIpRestriction: appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#action AppServiceSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#action AppServiceSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | AppServiceSlotSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}.

---

### AppServiceSlotSiteConfigScmIpRestrictionHeaders <a name="AppServiceSlotSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotSiteConfigScmIpRestrictionHeaders: appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}.

---

### AppServiceSlotSiteCredential <a name="AppServiceSlotSiteCredential" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotSiteCredential: appServiceSlot.AppServiceSlotSiteCredential = { ... }
```


### AppServiceSlotStorageAccount <a name="AppServiceSlotStorageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotStorageAccount: appServiceSlot.AppServiceSlotStorageAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accessKey">accessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#access_key AppServiceSlot#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#account_name AppServiceSlot#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#share_name AppServiceSlot#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#type AppServiceSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#mount_path AppServiceSlot#mount_path}. |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#access_key AppServiceSlot#access_key}.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#account_name AppServiceSlot#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#share_name AppServiceSlot#share_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#mount_path AppServiceSlot#mount_path}.

---

### AppServiceSlotTimeouts <a name="AppServiceSlotTimeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

const appServiceSlotTimeouts: appServiceSlot.AppServiceSlotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#create AppServiceSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#delete AppServiceSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#read AppServiceSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#update AppServiceSlot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#create AppServiceSlot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#delete AppServiceSlot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#read AppServiceSlot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_slot#update AppServiceSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSlotAuthSettingsActiveDirectoryOutputReference <a name="AppServiceSlotAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```typescript
public resetAllowedAudiences(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```typescript
public readonly allowedAudiencesInput: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

---


### AppServiceSlotAuthSettingsFacebookOutputReference <a name="AppServiceSlotAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```typescript
public readonly appSecretInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

---


### AppServiceSlotAuthSettingsGoogleOutputReference <a name="AppServiceSlotAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

---


### AppServiceSlotAuthSettingsMicrosoftOutputReference <a name="AppServiceSlotAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

---


### AppServiceSlotAuthSettingsOutputReference <a name="AppServiceSlotAuthSettingsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotAuthSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook">putFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle">putGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft">putMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAdditionalLoginParams">resetAdditionalLoginParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">resetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetDefaultProvider">resetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetFacebook">resetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetGoogle">resetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetMicrosoft">resetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours">resetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenStoreEnabled">resetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction">resetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory"></a>

```typescript
public putActiveDirectory(value: AppServiceSlotAuthSettingsActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

---

##### `putFacebook` <a name="putFacebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook"></a>

```typescript
public putFacebook(value: AppServiceSlotAuthSettingsFacebook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

---

##### `putGoogle` <a name="putGoogle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle"></a>

```typescript
public putGoogle(value: AppServiceSlotAuthSettingsGoogle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

---

##### `putMicrosoft` <a name="putMicrosoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft"></a>

```typescript
public putMicrosoft(value: AppServiceSlotAuthSettingsMicrosoft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter"></a>

```typescript
public putTwitter(value: AppServiceSlotAuthSettingsTwitter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetAdditionalLoginParams` <a name="resetAdditionalLoginParams" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```typescript
public resetAdditionalLoginParams(): void
```

##### `resetAllowedExternalRedirectUrls` <a name="resetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```typescript
public resetAllowedExternalRedirectUrls(): void
```

##### `resetDefaultProvider` <a name="resetDefaultProvider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetDefaultProvider"></a>

```typescript
public resetDefaultProvider(): void
```

##### `resetFacebook` <a name="resetFacebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetFacebook"></a>

```typescript
public resetFacebook(): void
```

##### `resetGoogle` <a name="resetGoogle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetGoogle"></a>

```typescript
public resetGoogle(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetMicrosoft` <a name="resetMicrosoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetMicrosoft"></a>

```typescript
public resetMicrosoft(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```

##### `resetTokenRefreshExtensionHours` <a name="resetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```typescript
public resetTokenRefreshExtensionHours(): void
```

##### `resetTokenStoreEnabled` <a name="resetTokenStoreEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```typescript
public resetTokenStoreEnabled(): void
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTwitter"></a>

```typescript
public resetTwitter(): void
```

##### `resetUnauthenticatedClientAction` <a name="resetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```typescript
public resetUnauthenticatedClientAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference">AppServiceSlotAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference">AppServiceSlotAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference">AppServiceSlotAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference">AppServiceSlotAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference">AppServiceSlotAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParamsInput">additionalLoginParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowedExternalRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProviderInput">defaultProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebookInput">facebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.googleInput">googleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoftInput">microsoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">tokenRefreshExtensionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput">tokenStoreEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticatedClientActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParams">additionalLoginParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: AppServiceSlotAuthSettingsActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference">AppServiceSlotAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebook"></a>

```typescript
public readonly facebook: AppServiceSlotAuthSettingsFacebookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference">AppServiceSlotAuthSettingsFacebookOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.google"></a>

```typescript
public readonly google: AppServiceSlotAuthSettingsGoogleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference">AppServiceSlotAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoft"></a>

```typescript
public readonly microsoft: AppServiceSlotAuthSettingsMicrosoftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference">AppServiceSlotAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitter"></a>

```typescript
public readonly twitter: AppServiceSlotAuthSettingsTwitterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference">AppServiceSlotAuthSettingsTwitterOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: AppServiceSlotAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

---

##### `additionalLoginParamsInput`<sup>Optional</sup> <a name="additionalLoginParamsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```typescript
public readonly additionalLoginParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="allowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```typescript
public readonly allowedExternalRedirectUrlsInput: string[];
```

- *Type:* string[]

---

##### `defaultProviderInput`<sup>Optional</sup> <a name="defaultProviderInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProviderInput"></a>

```typescript
public readonly defaultProviderInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `facebookInput`<sup>Optional</sup> <a name="facebookInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebookInput"></a>

```typescript
public readonly facebookInput: AppServiceSlotAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

---

##### `googleInput`<sup>Optional</sup> <a name="googleInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.googleInput"></a>

```typescript
public readonly googleInput: AppServiceSlotAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `microsoftInput`<sup>Optional</sup> <a name="microsoftInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoftInput"></a>

```typescript
public readonly microsoftInput: AppServiceSlotAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="tokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```typescript
public readonly tokenRefreshExtensionHoursInput: number;
```

- *Type:* number

---

##### `tokenStoreEnabledInput`<sup>Optional</sup> <a name="tokenStoreEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```typescript
public readonly tokenStoreEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitterInput"></a>

```typescript
public readonly twitterInput: AppServiceSlotAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

---

##### `unauthenticatedClientActionInput`<sup>Optional</sup> <a name="unauthenticatedClientActionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```typescript
public readonly unauthenticatedClientActionInput: string;
```

- *Type:* string

---

##### `additionalLoginParams`<sup>Required</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParams"></a>

```typescript
public readonly additionalLoginParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

---


### AppServiceSlotAuthSettingsTwitterOutputReference <a name="AppServiceSlotAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```typescript
public readonly consumerKeyInput: string;
```

- *Type:* string

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```typescript
public readonly consumerSecretInput: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

---


### AppServiceSlotConnectionStringList <a name="AppServiceSlotConnectionStringList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.get"></a>

```typescript
public get(index: number): AppServiceSlotConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>[]

---


### AppServiceSlotConnectionStringOutputReference <a name="AppServiceSlotConnectionStringOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotConnectionString;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>

---


### AppServiceSlotIdentityOutputReference <a name="AppServiceSlotIdentityOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

---


### AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference <a name="AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput">sasUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl">sasUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `sasUrlInput`<sup>Optional</sup> <a name="sasUrlInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```typescript
public readonly sasUrlInput: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotLogsApplicationLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

---


### AppServiceSlotLogsApplicationLogsOutputReference <a name="AppServiceSlotLogsApplicationLogsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage">putAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetAzureBlobStorage">resetAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetFileSystemLevel">resetFileSystemLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobStorage` <a name="putAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage"></a>

```typescript
public putAzureBlobStorage(value: AppServiceSlotLogsApplicationLogsAzureBlobStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

---

##### `resetAzureBlobStorage` <a name="resetAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetAzureBlobStorage"></a>

```typescript
public resetAzureBlobStorage(): void
```

##### `resetFileSystemLevel` <a name="resetFileSystemLevel" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetFileSystemLevel"></a>

```typescript
public resetFileSystemLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorageInput">azureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevelInput">fileSystemLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevel">fileSystemLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureBlobStorage`<sup>Required</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference</a>

---

##### `azureBlobStorageInput`<sup>Optional</sup> <a name="azureBlobStorageInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorageInput"></a>

```typescript
public readonly azureBlobStorageInput: AppServiceSlotLogsApplicationLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

---

##### `fileSystemLevelInput`<sup>Optional</sup> <a name="fileSystemLevelInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevelInput"></a>

```typescript
public readonly fileSystemLevelInput: string;
```

- *Type:* string

---

##### `fileSystemLevel`<sup>Required</sup> <a name="fileSystemLevel" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevel"></a>

```typescript
public readonly fileSystemLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotLogsApplicationLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

---


### AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference <a name="AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput">sasUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl">sasUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `sasUrlInput`<sup>Optional</sup> <a name="sasUrlInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```typescript
public readonly sasUrlInput: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotLogsHttpLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

---


### AppServiceSlotLogsHttpLogsFileSystemOutputReference <a name="AppServiceSlotLogsHttpLogsFileSystemOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput">retentionInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMb">retentionInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `retentionInMbInput`<sup>Optional</sup> <a name="retentionInMbInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput"></a>

```typescript
public readonly retentionInMbInput: number;
```

- *Type:* number

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `retentionInMb`<sup>Required</sup> <a name="retentionInMb" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMb"></a>

```typescript
public readonly retentionInMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotLogsHttpLogsFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

---


### AppServiceSlotLogsHttpLogsOutputReference <a name="AppServiceSlotLogsHttpLogsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage">putAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem">putFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetAzureBlobStorage">resetAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetFileSystem">resetFileSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobStorage` <a name="putAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage"></a>

```typescript
public putAzureBlobStorage(value: AppServiceSlotLogsHttpLogsAzureBlobStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

---

##### `putFileSystem` <a name="putFileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem"></a>

```typescript
public putFileSystem(value: AppServiceSlotLogsHttpLogsFileSystem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

---

##### `resetAzureBlobStorage` <a name="resetAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetAzureBlobStorage"></a>

```typescript
public resetAzureBlobStorage(): void
```

##### `resetFileSystem` <a name="resetFileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetFileSystem"></a>

```typescript
public resetFileSystem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference">AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystem">fileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference">AppServiceSlotLogsHttpLogsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorageInput">azureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystemInput">fileSystemInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureBlobStorage`<sup>Required</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference">AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference</a>

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystem"></a>

```typescript
public readonly fileSystem: AppServiceSlotLogsHttpLogsFileSystemOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference">AppServiceSlotLogsHttpLogsFileSystemOutputReference</a>

---

##### `azureBlobStorageInput`<sup>Optional</sup> <a name="azureBlobStorageInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorageInput"></a>

```typescript
public readonly azureBlobStorageInput: AppServiceSlotLogsHttpLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

---

##### `fileSystemInput`<sup>Optional</sup> <a name="fileSystemInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystemInput"></a>

```typescript
public readonly fileSystemInput: AppServiceSlotLogsHttpLogsFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotLogsHttpLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

---


### AppServiceSlotLogsOutputReference <a name="AppServiceSlotLogsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs">putApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs">putHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetApplicationLogs">resetApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetDetailedErrorMessagesEnabled">resetDetailedErrorMessagesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetFailedRequestTracingEnabled">resetFailedRequestTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetHttpLogs">resetHttpLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationLogs` <a name="putApplicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs"></a>

```typescript
public putApplicationLogs(value: AppServiceSlotLogsApplicationLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

---

##### `putHttpLogs` <a name="putHttpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs"></a>

```typescript
public putHttpLogs(value: AppServiceSlotLogsHttpLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

---

##### `resetApplicationLogs` <a name="resetApplicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetApplicationLogs"></a>

```typescript
public resetApplicationLogs(): void
```

##### `resetDetailedErrorMessagesEnabled` <a name="resetDetailedErrorMessagesEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetDetailedErrorMessagesEnabled"></a>

```typescript
public resetDetailedErrorMessagesEnabled(): void
```

##### `resetFailedRequestTracingEnabled` <a name="resetFailedRequestTracingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetFailedRequestTracingEnabled"></a>

```typescript
public resetFailedRequestTracingEnabled(): void
```

##### `resetHttpLogs` <a name="resetHttpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetHttpLogs"></a>

```typescript
public resetHttpLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference">AppServiceSlotLogsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogs">httpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference">AppServiceSlotLogsHttpLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogsInput">applicationLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabledInput">detailedErrorMessagesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabledInput">failedRequestTracingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogsInput">httpLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabled">detailedErrorMessagesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabled">failedRequestTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: AppServiceSlotLogsApplicationLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference">AppServiceSlotLogsApplicationLogsOutputReference</a>

---

##### `httpLogs`<sup>Required</sup> <a name="httpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogs"></a>

```typescript
public readonly httpLogs: AppServiceSlotLogsHttpLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference">AppServiceSlotLogsHttpLogsOutputReference</a>

---

##### `applicationLogsInput`<sup>Optional</sup> <a name="applicationLogsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogsInput"></a>

```typescript
public readonly applicationLogsInput: AppServiceSlotLogsApplicationLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

---

##### `detailedErrorMessagesEnabledInput`<sup>Optional</sup> <a name="detailedErrorMessagesEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabledInput"></a>

```typescript
public readonly detailedErrorMessagesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedRequestTracingEnabledInput`<sup>Optional</sup> <a name="failedRequestTracingEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabledInput"></a>

```typescript
public readonly failedRequestTracingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpLogsInput`<sup>Optional</sup> <a name="httpLogsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogsInput"></a>

```typescript
public readonly httpLogsInput: AppServiceSlotLogsHttpLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

---

##### `detailedErrorMessagesEnabled`<sup>Required</sup> <a name="detailedErrorMessagesEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabled"></a>

```typescript
public readonly detailedErrorMessagesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedRequestTracingEnabled`<sup>Required</sup> <a name="failedRequestTracingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabled"></a>

```typescript
public readonly failedRequestTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

---


### AppServiceSlotSiteConfigCorsOutputReference <a name="AppServiceSlotSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```typescript
public resetSupportCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```typescript
public readonly supportCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

---


### AppServiceSlotSiteConfigIpRestrictionHeadersList <a name="AppServiceSlotSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>[]

---


### AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference <a name="AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotSiteConfigIpRestrictionHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>

---


### AppServiceSlotSiteConfigIpRestrictionList <a name="AppServiceSlotSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.get"></a>

```typescript
public get(index: number): AppServiceSlotSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>[]

---


### AppServiceSlotSiteConfigIpRestrictionOutputReference <a name="AppServiceSlotSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | AppServiceSlotSiteConfigIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList">AppServiceSlotSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: AppServiceSlotSiteConfigIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList">AppServiceSlotSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | AppServiceSlotSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotSiteConfigIpRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>

---


### AppServiceSlotSiteConfigOutputReference <a name="AppServiceSlotSiteConfigOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials">resetAcrUseManagedIdentityCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUserManagedIdentityClientId">resetAcrUserManagedIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAppCommandLine">resetAppCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAutoSwapSlotName">resetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDefaultDocuments">resetDefaultDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDotnetFrameworkVersion">resetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainer">resetJavaContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainerVersion">resetJavaContainerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLinuxFxVersion">resetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLocalMysqlEnabled">resetLocalMysqlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetManagedPipelineMode">resetManagedPipelineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPhpVersion">resetPhpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled">resetRemoteDebuggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingVersion">resetRemoteDebuggingVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmType">resetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetUse32BitWorkerProcess">resetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWindowsFxVersion">resetWindowsFxVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors"></a>

```typescript
public putCors(value: AppServiceSlotSiteConfigCors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putIpRestriction"></a>

```typescript
public putIpRestriction(value: IResolvable | AppServiceSlotSiteConfigIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>[]

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putScmIpRestriction"></a>

```typescript
public putScmIpRestriction(value: IResolvable | AppServiceSlotSiteConfigScmIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>[]

---

##### `resetAcrUseManagedIdentityCredentials` <a name="resetAcrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials"></a>

```typescript
public resetAcrUseManagedIdentityCredentials(): void
```

##### `resetAcrUserManagedIdentityClientId` <a name="resetAcrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUserManagedIdentityClientId"></a>

```typescript
public resetAcrUserManagedIdentityClientId(): void
```

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAlwaysOn"></a>

```typescript
public resetAlwaysOn(): void
```

##### `resetAppCommandLine` <a name="resetAppCommandLine" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAppCommandLine"></a>

```typescript
public resetAppCommandLine(): void
```

##### `resetAutoSwapSlotName` <a name="resetAutoSwapSlotName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```typescript
public resetAutoSwapSlotName(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetDefaultDocuments` <a name="resetDefaultDocuments" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDefaultDocuments"></a>

```typescript
public resetDefaultDocuments(): void
```

##### `resetDotnetFrameworkVersion` <a name="resetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```typescript
public resetDotnetFrameworkVersion(): void
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetFtpsState"></a>

```typescript
public resetFtpsState(): void
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHealthCheckPath"></a>

```typescript
public resetHealthCheckPath(): void
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHttp2Enabled"></a>

```typescript
public resetHttp2Enabled(): void
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetIpRestriction"></a>

```typescript
public resetIpRestriction(): void
```

##### `resetJavaContainer` <a name="resetJavaContainer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainer"></a>

```typescript
public resetJavaContainer(): void
```

##### `resetJavaContainerVersion` <a name="resetJavaContainerVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainerVersion"></a>

```typescript
public resetJavaContainerVersion(): void
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaVersion"></a>

```typescript
public resetJavaVersion(): void
```

##### `resetLinuxFxVersion` <a name="resetLinuxFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLinuxFxVersion"></a>

```typescript
public resetLinuxFxVersion(): void
```

##### `resetLocalMysqlEnabled` <a name="resetLocalMysqlEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLocalMysqlEnabled"></a>

```typescript
public resetLocalMysqlEnabled(): void
```

##### `resetManagedPipelineMode` <a name="resetManagedPipelineMode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetManagedPipelineMode"></a>

```typescript
public resetManagedPipelineMode(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetNumberOfWorkers"></a>

```typescript
public resetNumberOfWorkers(): void
```

##### `resetPhpVersion` <a name="resetPhpVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPhpVersion"></a>

```typescript
public resetPhpVersion(): void
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPythonVersion"></a>

```typescript
public resetPythonVersion(): void
```

##### `resetRemoteDebuggingEnabled` <a name="resetRemoteDebuggingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```typescript
public resetRemoteDebuggingEnabled(): void
```

##### `resetRemoteDebuggingVersion` <a name="resetRemoteDebuggingVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```typescript
public resetRemoteDebuggingVersion(): void
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmIpRestriction"></a>

```typescript
public resetScmIpRestriction(): void
```

##### `resetScmType` <a name="resetScmType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmType"></a>

```typescript
public resetScmType(): void
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```typescript
public resetScmUseMainIpRestriction(): void
```

##### `resetUse32BitWorkerProcess` <a name="resetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```typescript
public resetUse32BitWorkerProcess(): void
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```typescript
public resetVnetRouteAllEnabled(): void
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```typescript
public resetWebsocketsEnabled(): void
```

##### `resetWindowsFxVersion` <a name="resetWindowsFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWindowsFxVersion"></a>

```typescript
public resetWindowsFxVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference">AppServiceSlotSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList">AppServiceSlotSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList">AppServiceSlotSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput">acrUseManagedIdentityCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput">acrUserManagedIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLineInput">appCommandLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotNameInput">autoSwapSlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocumentsInput">defaultDocumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnetFrameworkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerInput">javaContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersionInput">javaContainerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersionInput">javaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersionInput">linuxFxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabledInput">localMysqlEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineModeInput">managedPipelineModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersionInput">phpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput">remoteDebuggingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput">remoteDebuggingVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmTypeInput">scmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32BitWorkerProcessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersionInput">windowsFxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentials">acrUseManagedIdentityCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientId">acrUserManagedIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainer">javaContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersion">javaContainerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersion">linuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabled">localMysqlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersion">phpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersion">windowsFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.cors"></a>

```typescript
public readonly cors: AppServiceSlotSiteConfigCorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference">AppServiceSlotSiteConfigCorsOutputReference</a>

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: AppServiceSlotSiteConfigIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList">AppServiceSlotSiteConfigIpRestrictionList</a>

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: AppServiceSlotSiteConfigScmIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList">AppServiceSlotSiteConfigScmIpRestrictionList</a>

---

##### `acrUseManagedIdentityCredentialsInput`<sup>Optional</sup> <a name="acrUseManagedIdentityCredentialsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput"></a>

```typescript
public readonly acrUseManagedIdentityCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acrUserManagedIdentityClientIdInput`<sup>Optional</sup> <a name="acrUserManagedIdentityClientIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput"></a>

```typescript
public readonly acrUserManagedIdentityClientIdInput: string;
```

- *Type:* string

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOnInput"></a>

```typescript
public readonly alwaysOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appCommandLineInput`<sup>Optional</sup> <a name="appCommandLineInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLineInput"></a>

```typescript
public readonly appCommandLineInput: string;
```

- *Type:* string

---

##### `autoSwapSlotNameInput`<sup>Optional</sup> <a name="autoSwapSlotNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```typescript
public readonly autoSwapSlotNameInput: string;
```

- *Type:* string

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.corsInput"></a>

```typescript
public readonly corsInput: AppServiceSlotSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

---

##### `defaultDocumentsInput`<sup>Optional</sup> <a name="defaultDocumentsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```typescript
public readonly defaultDocumentsInput: string[];
```

- *Type:* string[]

---

##### `dotnetFrameworkVersionInput`<sup>Optional</sup> <a name="dotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```typescript
public readonly dotnetFrameworkVersionInput: string;
```

- *Type:* string

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsStateInput"></a>

```typescript
public readonly ftpsStateInput: string;
```

- *Type:* string

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPathInput"></a>

```typescript
public readonly healthCheckPathInput: string;
```

- *Type:* string

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2EnabledInput"></a>

```typescript
public readonly http2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestrictionInput"></a>

```typescript
public readonly ipRestrictionInput: IResolvable | AppServiceSlotSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>[]

---

##### `javaContainerInput`<sup>Optional</sup> <a name="javaContainerInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerInput"></a>

```typescript
public readonly javaContainerInput: string;
```

- *Type:* string

---

##### `javaContainerVersionInput`<sup>Optional</sup> <a name="javaContainerVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersionInput"></a>

```typescript
public readonly javaContainerVersionInput: string;
```

- *Type:* string

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersionInput"></a>

```typescript
public readonly javaVersionInput: string;
```

- *Type:* string

---

##### `linuxFxVersionInput`<sup>Optional</sup> <a name="linuxFxVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```typescript
public readonly linuxFxVersionInput: string;
```

- *Type:* string

---

##### `localMysqlEnabledInput`<sup>Optional</sup> <a name="localMysqlEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabledInput"></a>

```typescript
public readonly localMysqlEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedPipelineModeInput`<sup>Optional</sup> <a name="managedPipelineModeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```typescript
public readonly managedPipelineModeInput: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkersInput"></a>

```typescript
public readonly numberOfWorkersInput: number;
```

- *Type:* number

---

##### `phpVersionInput`<sup>Optional</sup> <a name="phpVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersionInput"></a>

```typescript
public readonly phpVersionInput: string;
```

- *Type:* string

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersionInput"></a>

```typescript
public readonly pythonVersionInput: string;
```

- *Type:* string

---

##### `remoteDebuggingEnabledInput`<sup>Optional</sup> <a name="remoteDebuggingEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```typescript
public readonly remoteDebuggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersionInput`<sup>Optional</sup> <a name="remoteDebuggingVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```typescript
public readonly remoteDebuggingVersionInput: string;
```

- *Type:* string

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```typescript
public readonly scmIpRestrictionInput: IResolvable | AppServiceSlotSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>[]

---

##### `scmTypeInput`<sup>Optional</sup> <a name="scmTypeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmTypeInput"></a>

```typescript
public readonly scmTypeInput: string;
```

- *Type:* string

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```typescript
public readonly scmUseMainIpRestrictionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorkerProcessInput`<sup>Optional</sup> <a name="use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```typescript
public readonly use32BitWorkerProcessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```typescript
public readonly vnetRouteAllEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```typescript
public readonly websocketsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `windowsFxVersionInput`<sup>Optional</sup> <a name="windowsFxVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersionInput"></a>

```typescript
public readonly windowsFxVersionInput: string;
```

- *Type:* string

---

##### `acrUseManagedIdentityCredentials`<sup>Required</sup> <a name="acrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentials"></a>

```typescript
public readonly acrUseManagedIdentityCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acrUserManagedIdentityClientId`<sup>Required</sup> <a name="acrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientId"></a>

```typescript
public readonly acrUserManagedIdentityClientId: string;
```

- *Type:* string

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appCommandLine`<sup>Required</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

---

##### `autoSwapSlotName`<sup>Required</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

---

##### `defaultDocuments`<sup>Required</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

---

##### `dotnetFrameworkVersion`<sup>Required</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```typescript
public readonly dotnetFrameworkVersion: string;
```

- *Type:* string

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javaContainer`<sup>Required</sup> <a name="javaContainer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainer"></a>

```typescript
public readonly javaContainer: string;
```

- *Type:* string

---

##### `javaContainerVersion`<sup>Required</sup> <a name="javaContainerVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersion"></a>

```typescript
public readonly javaContainerVersion: string;
```

- *Type:* string

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `linuxFxVersion`<sup>Required</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersion"></a>

```typescript
public readonly linuxFxVersion: string;
```

- *Type:* string

---

##### `localMysqlEnabled`<sup>Required</sup> <a name="localMysqlEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabled"></a>

```typescript
public readonly localMysqlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedPipelineMode`<sup>Required</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `phpVersion`<sup>Required</sup> <a name="phpVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersion"></a>

```typescript
public readonly phpVersion: string;
```

- *Type:* string

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersion`<sup>Required</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorkerProcess`<sup>Required</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```typescript
public readonly use32BitWorkerProcess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `windowsFxVersion`<sup>Required</sup> <a name="windowsFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersion"></a>

```typescript
public readonly windowsFxVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

---


### AppServiceSlotSiteConfigScmIpRestrictionHeadersList <a name="AppServiceSlotSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>[]

---


### AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference <a name="AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotSiteConfigScmIpRestrictionHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>

---


### AppServiceSlotSiteConfigScmIpRestrictionList <a name="AppServiceSlotSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.get"></a>

```typescript
public get(index: number): AppServiceSlotSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>[]

---


### AppServiceSlotSiteConfigScmIpRestrictionOutputReference <a name="AppServiceSlotSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | AppServiceSlotSiteConfigScmIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList">AppServiceSlotSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: AppServiceSlotSiteConfigScmIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList">AppServiceSlotSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | AppServiceSlotSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotSiteConfigScmIpRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>

---


### AppServiceSlotSiteCredentialList <a name="AppServiceSlotSiteCredentialList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.get"></a>

```typescript
public get(index: number): AppServiceSlotSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AppServiceSlotSiteCredentialOutputReference <a name="AppServiceSlotSiteCredentialOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotSiteCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential">AppServiceSlotSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSlotSiteCredential;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential">AppServiceSlotSiteCredential</a>

---


### AppServiceSlotStorageAccountList <a name="AppServiceSlotStorageAccountList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotStorageAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.get"></a>

```typescript
public get(index: number): AppServiceSlotStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>[]

---


### AppServiceSlotStorageAccountOutputReference <a name="AppServiceSlotStorageAccountOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotStorageAccount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>

---


### AppServiceSlotTimeoutsOutputReference <a name="AppServiceSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceSlot } from '@cdktf/provider-azurerm'

new appServiceSlot.AppServiceSlotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>

---



