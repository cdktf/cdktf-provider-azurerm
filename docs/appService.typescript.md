# `appService` Submodule <a name="`appService` Submodule" id="@cdktf/provider-azurerm.appService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppService <a name="AppService" id="@cdktf/provider-azurerm.appService.AppService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service azurerm_app_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppService.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppService(scope: Construct, id: string, config: AppServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig">AppServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceConfig">AppServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putAuthSettings">putAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putSourceControl">putSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetAuthSettings">resetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetClientAffinityEnabled">resetClientAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetClientCertEnabled">resetClientCertEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetClientCertMode">resetClientCertMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetKeyVaultReferenceIdentityId">resetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetSiteConfig">resetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetSourceControl">resetSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appService.AppService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appService.AppService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appService.AppService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appService.AppService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appService.AppService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.appService.AppService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appService.AppService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appService.AppService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.appService.AppService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appService.AppService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.appService.AppService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.appService.AppService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appService.AppService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.appService.AppService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.appService.AppService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appService.AppService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.appService.AppService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthSettings` <a name="putAuthSettings" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings"></a>

```typescript
public putAuthSettings(value: AppServiceAuthSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a>

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.appService.AppService.putBackup"></a>

```typescript
public putBackup(value: AppServiceBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a>

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.appService.AppService.putConnectionString"></a>

```typescript
public putConnectionString(value: IResolvable | AppServiceConnectionString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putConnectionString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.appService.AppService.putIdentity"></a>

```typescript
public putIdentity(value: AppServiceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a>

---

##### `putLogs` <a name="putLogs" id="@cdktf/provider-azurerm.appService.AppService.putLogs"></a>

```typescript
public putLogs(value: AppServiceLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig"></a>

```typescript
public putSiteConfig(value: AppServiceSiteConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a>

---

##### `putSourceControl` <a name="putSourceControl" id="@cdktf/provider-azurerm.appService.AppService.putSourceControl"></a>

```typescript
public putSourceControl(value: AppServiceSourceControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putSourceControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.appService.AppService.putStorageAccount"></a>

```typescript
public putStorageAccount(value: IResolvable | AppServiceStorageAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putStorageAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appService.AppService.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.appService.AppService.resetAppSettings"></a>

```typescript
public resetAppSettings(): void
```

##### `resetAuthSettings` <a name="resetAuthSettings" id="@cdktf/provider-azurerm.appService.AppService.resetAuthSettings"></a>

```typescript
public resetAuthSettings(): void
```

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azurerm.appService.AppService.resetBackup"></a>

```typescript
public resetBackup(): void
```

##### `resetClientAffinityEnabled` <a name="resetClientAffinityEnabled" id="@cdktf/provider-azurerm.appService.AppService.resetClientAffinityEnabled"></a>

```typescript
public resetClientAffinityEnabled(): void
```

##### `resetClientCertEnabled` <a name="resetClientCertEnabled" id="@cdktf/provider-azurerm.appService.AppService.resetClientCertEnabled"></a>

```typescript
public resetClientCertEnabled(): void
```

##### `resetClientCertMode` <a name="resetClientCertMode" id="@cdktf/provider-azurerm.appService.AppService.resetClientCertMode"></a>

```typescript
public resetClientCertMode(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.appService.AppService.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.appService.AppService.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.appService.AppService.resetHttpsOnly"></a>

```typescript
public resetHttpsOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appService.AppService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.appService.AppService.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKeyVaultReferenceIdentityId` <a name="resetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.appService.AppService.resetKeyVaultReferenceIdentityId"></a>

```typescript
public resetKeyVaultReferenceIdentityId(): void
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-azurerm.appService.AppService.resetLogs"></a>

```typescript
public resetLogs(): void
```

##### `resetSiteConfig` <a name="resetSiteConfig" id="@cdktf/provider-azurerm.appService.AppService.resetSiteConfig"></a>

```typescript
public resetSiteConfig(): void
```

##### `resetSourceControl` <a name="resetSourceControl" id="@cdktf/provider-azurerm.appService.AppService.resetSourceControl"></a>

```typescript
public resetSourceControl(): void
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.appService.AppService.resetStorageAccount"></a>

```typescript
public resetStorageAccount(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.appService.AppService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appService.AppService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appService.AppService.isConstruct"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

appService.AppService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appService.AppService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appService.AppService.isTerraformElement"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

appService.AppService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appService.AppService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appService.AppService.isTerraformResource"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

appService.AppService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appService.AppService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

appService.AppService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference">AppServiceAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference">AppServiceBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList">AppServiceConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.defaultSiteHostname">defaultSiteHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference">AppServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference">AppServiceLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.outboundIpAddressList">outboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.possibleOutboundIpAddressList">possibleOutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference">AppServiceSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList">AppServiceSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.sourceControl">sourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference">AppServiceSourceControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList">AppServiceStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference">AppServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.appServicePlanIdInput">appServicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.appSettingsInput">appSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.authSettingsInput">authSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientAffinityEnabledInput">clientAffinityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientCertEnabledInput">clientCertEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientCertModeInput">clientCertModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.connectionStringInput">connectionStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.keyVaultReferenceIdentityIdInput">keyVaultReferenceIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.logsInput">logsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.sourceControlInput">sourceControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.storageAccountInput">storageAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.appServicePlanId">appServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientCertEnabled">clientCertEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientCertMode">clientCertMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appService.AppService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appService.AppService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appService.AppService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appService.AppService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appService.AppService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appService.AppService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appService.AppService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appService.AppService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appService.AppService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appService.AppService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appService.AppService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appService.AppService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appService.AppService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.appService.AppService.property.authSettings"></a>

```typescript
public readonly authSettings: AppServiceAuthSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference">AppServiceAuthSettingsOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.appService.AppService.property.backup"></a>

```typescript
public readonly backup: AppServiceBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference">AppServiceBackupOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.appService.AppService.property.connectionString"></a>

```typescript
public readonly connectionString: AppServiceConnectionStringList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList">AppServiceConnectionStringList</a>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.appService.AppService.property.customDomainVerificationId"></a>

```typescript
public readonly customDomainVerificationId: string;
```

- *Type:* string

---

##### `defaultSiteHostname`<sup>Required</sup> <a name="defaultSiteHostname" id="@cdktf/provider-azurerm.appService.AppService.property.defaultSiteHostname"></a>

```typescript
public readonly defaultSiteHostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.appService.AppService.property.identity"></a>

```typescript
public readonly identity: AppServiceIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference">AppServiceIdentityOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-azurerm.appService.AppService.property.logs"></a>

```typescript
public readonly logs: AppServiceLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference">AppServiceLogsOutputReference</a>

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.appService.AppService.property.outboundIpAddresses"></a>

```typescript
public readonly outboundIpAddresses: string;
```

- *Type:* string

---

##### `outboundIpAddressList`<sup>Required</sup> <a name="outboundIpAddressList" id="@cdktf/provider-azurerm.appService.AppService.property.outboundIpAddressList"></a>

```typescript
public readonly outboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.appService.AppService.property.possibleOutboundIpAddresses"></a>

```typescript
public readonly possibleOutboundIpAddresses: string;
```

- *Type:* string

---

##### `possibleOutboundIpAddressList`<sup>Required</sup> <a name="possibleOutboundIpAddressList" id="@cdktf/provider-azurerm.appService.AppService.property.possibleOutboundIpAddressList"></a>

```typescript
public readonly possibleOutboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.appService.AppService.property.siteConfig"></a>

```typescript
public readonly siteConfig: AppServiceSiteConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference">AppServiceSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.appService.AppService.property.siteCredential"></a>

```typescript
public readonly siteCredential: AppServiceSiteCredentialList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList">AppServiceSiteCredentialList</a>

---

##### `sourceControl`<sup>Required</sup> <a name="sourceControl" id="@cdktf/provider-azurerm.appService.AppService.property.sourceControl"></a>

```typescript
public readonly sourceControl: AppServiceSourceControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference">AppServiceSourceControlOutputReference</a>

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.appService.AppService.property.storageAccount"></a>

```typescript
public readonly storageAccount: AppServiceStorageAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList">AppServiceStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appService.AppService.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference">AppServiceTimeoutsOutputReference</a>

---

##### `appServicePlanIdInput`<sup>Optional</sup> <a name="appServicePlanIdInput" id="@cdktf/provider-azurerm.appService.AppService.property.appServicePlanIdInput"></a>

```typescript
public readonly appServicePlanIdInput: string;
```

- *Type:* string

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.appService.AppService.property.appSettingsInput"></a>

```typescript
public readonly appSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authSettingsInput`<sup>Optional</sup> <a name="authSettingsInput" id="@cdktf/provider-azurerm.appService.AppService.property.authSettingsInput"></a>

```typescript
public readonly authSettingsInput: AppServiceAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.appService.AppService.property.backupInput"></a>

```typescript
public readonly backupInput: AppServiceBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a>

---

##### `clientAffinityEnabledInput`<sup>Optional</sup> <a name="clientAffinityEnabledInput" id="@cdktf/provider-azurerm.appService.AppService.property.clientAffinityEnabledInput"></a>

```typescript
public readonly clientAffinityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertEnabledInput`<sup>Optional</sup> <a name="clientCertEnabledInput" id="@cdktf/provider-azurerm.appService.AppService.property.clientCertEnabledInput"></a>

```typescript
public readonly clientCertEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertModeInput`<sup>Optional</sup> <a name="clientCertModeInput" id="@cdktf/provider-azurerm.appService.AppService.property.clientCertModeInput"></a>

```typescript
public readonly clientCertModeInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.appService.AppService.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: IResolvable | AppServiceConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.appService.AppService.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.appService.AppService.property.httpsOnlyInput"></a>

```typescript
public readonly httpsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.appService.AppService.property.identityInput"></a>

```typescript
public readonly identityInput: AppServiceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appService.AppService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="keyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.appService.AppService.property.keyVaultReferenceIdentityIdInput"></a>

```typescript
public readonly keyVaultReferenceIdentityIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.appService.AppService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-azurerm.appService.AppService.property.logsInput"></a>

```typescript
public readonly logsInput: AppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appService.AppService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.appService.AppService.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.appService.AppService.property.siteConfigInput"></a>

```typescript
public readonly siteConfigInput: AppServiceSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a>

---

##### `sourceControlInput`<sup>Optional</sup> <a name="sourceControlInput" id="@cdktf/provider-azurerm.appService.AppService.property.sourceControlInput"></a>

```typescript
public readonly sourceControlInput: AppServiceSourceControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a>

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.appService.AppService.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: IResolvable | AppServiceStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.appService.AppService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appService.AppService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.appService.AppService.property.appServicePlanId"></a>

```typescript
public readonly appServicePlanId: string;
```

- *Type:* string

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.appService.AppService.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientAffinityEnabled`<sup>Required</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.appService.AppService.property.clientAffinityEnabled"></a>

```typescript
public readonly clientAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertEnabled`<sup>Required</sup> <a name="clientCertEnabled" id="@cdktf/provider-azurerm.appService.AppService.property.clientCertEnabled"></a>

```typescript
public readonly clientCertEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertMode`<sup>Required</sup> <a name="clientCertMode" id="@cdktf/provider-azurerm.appService.AppService.property.clientCertMode"></a>

```typescript
public readonly clientCertMode: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppService.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.appService.AppService.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityId`<sup>Required</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.appService.AppService.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appService.AppService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appService.AppService.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appService.AppService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appService.AppService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceAuthSettings <a name="AppServiceAuthSettings" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceAuthSettings: appService.AppServiceAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#enabled AppService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.additionalLoginParams">additionalLoginParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#additional_login_params AppService#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#allowed_external_redirect_urls AppService#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#default_provider AppService#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#issuer AppService#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#runtime_version AppService#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#token_refresh_extension_hours AppService#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#token_store_enabled AppService#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#unauthenticated_client_action AppService#unauthenticated_client_action}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#enabled AppService#enabled}.

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: AppServiceAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#active_directory AppService#active_directory}

---

##### `additionalLoginParams`<sup>Optional</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.additionalLoginParams"></a>

```typescript
public readonly additionalLoginParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#additional_login_params AppService#additional_login_params}.

---

##### `allowedExternalRedirectUrls`<sup>Optional</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#allowed_external_redirect_urls AppService#allowed_external_redirect_urls}.

---

##### `defaultProvider`<sup>Optional</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#default_provider AppService#default_provider}.

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.facebook"></a>

```typescript
public readonly facebook: AppServiceAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#facebook AppService#facebook}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.google"></a>

```typescript
public readonly google: AppServiceAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#google AppService#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#issuer AppService#issuer}.

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.microsoft"></a>

```typescript
public readonly microsoft: AppServiceAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#microsoft AppService#microsoft}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#runtime_version AppService#runtime_version}.

---

##### `tokenRefreshExtensionHours`<sup>Optional</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#token_refresh_extension_hours AppService#token_refresh_extension_hours}.

---

##### `tokenStoreEnabled`<sup>Optional</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#token_store_enabled AppService#token_store_enabled}.

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.twitter"></a>

```typescript
public readonly twitter: AppServiceAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#twitter AppService#twitter}

---

##### `unauthenticatedClientAction`<sup>Optional</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#unauthenticated_client_action AppService#unauthenticated_client_action}.

---

### AppServiceAuthSettingsActiveDirectory <a name="AppServiceAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceAuthSettingsActiveDirectory: appService.AppServiceAuthSettingsActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_id AppService#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#allowed_audiences AppService#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_secret AppService#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_id AppService#client_id}.

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#allowed_audiences AppService#allowed_audiences}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_secret AppService#client_secret}.

---

### AppServiceAuthSettingsFacebook <a name="AppServiceAuthSettingsFacebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceAuthSettingsFacebook: appService.AppServiceAuthSettingsFacebook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_id AppService#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.appSecret">appSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_secret AppService#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_id AppService#app_id}.

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_secret AppService#app_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}.

---

### AppServiceAuthSettingsGoogle <a name="AppServiceAuthSettingsGoogle" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceAuthSettingsGoogle: appService.AppServiceAuthSettingsGoogle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_id AppService#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_secret AppService#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_id AppService#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_secret AppService#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}.

---

### AppServiceAuthSettingsMicrosoft <a name="AppServiceAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceAuthSettingsMicrosoft: appService.AppServiceAuthSettingsMicrosoft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_id AppService#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_secret AppService#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_id AppService#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_secret AppService#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}.

---

### AppServiceAuthSettingsTwitter <a name="AppServiceAuthSettingsTwitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceAuthSettingsTwitter: appService.AppServiceAuthSettingsTwitter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.property.consumerKey">consumerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#consumer_key AppService#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#consumer_secret AppService#consumer_secret}. |

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#consumer_key AppService#consumer_key}.

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#consumer_secret AppService#consumer_secret}.

---

### AppServiceBackup <a name="AppServiceBackup" id="@cdktf/provider-azurerm.appService.AppServiceBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceBackup.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceBackup: appService.AppServiceBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#storage_account_url AppService#storage_account_url}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#enabled AppService#enabled}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceBackup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.appService.AppServiceBackup.property.schedule"></a>

```typescript
public readonly schedule: AppServiceBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#schedule AppService#schedule}

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.appService.AppServiceBackup.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#storage_account_url AppService#storage_account_url}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceBackup.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#enabled AppService#enabled}.

---

### AppServiceBackupSchedule <a name="AppServiceBackupSchedule" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceBackupSchedule: appService.AppServiceBackupSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#frequency_interval AppService#frequency_interval}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.frequencyUnit">frequencyUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#frequency_unit AppService#frequency_unit}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#keep_at_least_one_backup AppService#keep_at_least_one_backup}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_period_in_days AppService#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#start_time AppService#start_time}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#frequency_interval AppService#frequency_interval}.

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.frequencyUnit"></a>

```typescript
public readonly frequencyUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#frequency_unit AppService#frequency_unit}.

---

##### `keepAtLeastOneBackup`<sup>Optional</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.keepAtLeastOneBackup"></a>

```typescript
public readonly keepAtLeastOneBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#keep_at_least_one_backup AppService#keep_at_least_one_backup}.

---

##### `retentionPeriodInDays`<sup>Optional</sup> <a name="retentionPeriodInDays" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_period_in_days AppService#retention_period_in_days}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#start_time AppService#start_time}.

---

### AppServiceConfig <a name="AppServiceConfig" id="@cdktf/provider-azurerm.appService.AppServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceConfig.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceConfig: appService.AppServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.appServicePlanId">appServicePlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_service_plan_id AppService#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#location AppService#location}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#resource_group_name AppService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_settings AppService#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_affinity_enabled AppService#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientCertEnabled">clientCertEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_cert_enabled AppService#client_cert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientCertMode">clientCertMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_cert_mode AppService#client_cert_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.connectionString">connectionString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>[]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#enabled AppService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#https_only AppService#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#id AppService#id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#key_vault_reference_identity_id AppService#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.sourceControl">sourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a></code> | source_control block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.storageAccount">storageAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>[]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#tags AppService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.appServicePlanId"></a>

```typescript
public readonly appServicePlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_service_plan_id AppService#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#location AppService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#resource_group_name AppService#resource_group_name}.

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_settings AppService#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.authSettings"></a>

```typescript
public readonly authSettings: AppServiceAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#auth_settings AppService#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.backup"></a>

```typescript
public readonly backup: AppServiceBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#backup AppService#backup}

---

##### `clientAffinityEnabled`<sup>Optional</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientAffinityEnabled"></a>

```typescript
public readonly clientAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_affinity_enabled AppService#client_affinity_enabled}.

---

##### `clientCertEnabled`<sup>Optional</sup> <a name="clientCertEnabled" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientCertEnabled"></a>

```typescript
public readonly clientCertEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_cert_enabled AppService#client_cert_enabled}.

---

##### `clientCertMode`<sup>Optional</sup> <a name="clientCertMode" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientCertMode"></a>

```typescript
public readonly clientCertMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#client_cert_mode AppService#client_cert_mode}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.connectionString"></a>

```typescript
public readonly connectionString: IResolvable | AppServiceConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>[]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#connection_string AppService#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#enabled AppService#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#https_only AppService#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#id AppService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.identity"></a>

```typescript
public readonly identity: AppServiceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#identity AppService#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#key_vault_reference_identity_id AppService#key_vault_reference_identity_id}.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.logs"></a>

```typescript
public readonly logs: AppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#logs AppService#logs}

---

##### `siteConfig`<sup>Optional</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.siteConfig"></a>

```typescript
public readonly siteConfig: AppServiceSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#site_config AppService#site_config}

---

##### `sourceControl`<sup>Optional</sup> <a name="sourceControl" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.sourceControl"></a>

```typescript
public readonly sourceControl: AppServiceSourceControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a>

source_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#source_control AppService#source_control}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: IResolvable | AppServiceStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>[]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#storage_account AppService#storage_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#tags AppService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#timeouts AppService#timeouts}

---

### AppServiceConnectionString <a name="AppServiceConnectionString" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceConnectionString: appService.AppServiceConnectionString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#type AppService#type}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#value AppService#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#type AppService#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#value AppService#value}.

---

### AppServiceIdentity <a name="AppServiceIdentity" id="@cdktf/provider-azurerm.appService.AppServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceIdentity.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceIdentity: appService.AppServiceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#type AppService#type}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#identity_ids AppService#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#type AppService#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.appService.AppServiceIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#identity_ids AppService#identity_ids}.

---

### AppServiceLogs <a name="AppServiceLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogs.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceLogs: appService.AppServiceLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a></code> | application_logs block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs.property.detailedErrorMessagesEnabled">detailedErrorMessagesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#detailed_error_messages_enabled AppService#detailed_error_messages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs.property.failedRequestTracingEnabled">failedRequestTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#failed_request_tracing_enabled AppService#failed_request_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs.property.httpLogs">httpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a></code> | http_logs block. |

---

##### `applicationLogs`<sup>Optional</sup> <a name="applicationLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogs.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: AppServiceLogsApplicationLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a>

application_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#application_logs AppService#application_logs}

---

##### `detailedErrorMessagesEnabled`<sup>Optional</sup> <a name="detailedErrorMessagesEnabled" id="@cdktf/provider-azurerm.appService.AppServiceLogs.property.detailedErrorMessagesEnabled"></a>

```typescript
public readonly detailedErrorMessagesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#detailed_error_messages_enabled AppService#detailed_error_messages_enabled}.

---

##### `failedRequestTracingEnabled`<sup>Optional</sup> <a name="failedRequestTracingEnabled" id="@cdktf/provider-azurerm.appService.AppServiceLogs.property.failedRequestTracingEnabled"></a>

```typescript
public readonly failedRequestTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#failed_request_tracing_enabled AppService#failed_request_tracing_enabled}.

---

##### `httpLogs`<sup>Optional</sup> <a name="httpLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogs.property.httpLogs"></a>

```typescript
public readonly httpLogs: AppServiceLogsHttpLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a>

http_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#http_logs AppService#http_logs}

---

### AppServiceLogsApplicationLogs <a name="AppServiceLogsApplicationLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceLogsApplicationLogs: appService.AppServiceLogsApplicationLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.property.fileSystemLevel">fileSystemLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#file_system_level AppService#file_system_level}. |

---

##### `azureBlobStorage`<sup>Optional</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: AppServiceLogsApplicationLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#azure_blob_storage AppService#azure_blob_storage}

---

##### `fileSystemLevel`<sup>Optional</sup> <a name="fileSystemLevel" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.property.fileSystemLevel"></a>

```typescript
public readonly fileSystemLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#file_system_level AppService#file_system_level}.

---

### AppServiceLogsApplicationLogsAzureBlobStorage <a name="AppServiceLogsApplicationLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceLogsApplicationLogsAzureBlobStorage: appService.AppServiceLogsApplicationLogsAzureBlobStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.level">level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#level AppService#level}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.sasUrl">sasUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#sas_url AppService#sas_url}. |

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#level AppService#level}.

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}.

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#sas_url AppService#sas_url}.

---

### AppServiceLogsHttpLogs <a name="AppServiceLogsHttpLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceLogsHttpLogs: appService.AppServiceLogsHttpLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.property.fileSystem">fileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a></code> | file_system block. |

---

##### `azureBlobStorage`<sup>Optional</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: AppServiceLogsHttpLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#azure_blob_storage AppService#azure_blob_storage}

---

##### `fileSystem`<sup>Optional</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.property.fileSystem"></a>

```typescript
public readonly fileSystem: AppServiceLogsHttpLogsFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a>

file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#file_system AppService#file_system}

---

### AppServiceLogsHttpLogsAzureBlobStorage <a name="AppServiceLogsHttpLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceLogsHttpLogsAzureBlobStorage: appService.AppServiceLogsHttpLogsAzureBlobStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.property.sasUrl">sasUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#sas_url AppService#sas_url}. |

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}.

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#sas_url AppService#sas_url}.

---

### AppServiceLogsHttpLogsFileSystem <a name="AppServiceLogsHttpLogsFileSystem" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceLogsHttpLogsFileSystem: appService.AppServiceLogsHttpLogsFileSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.property.retentionInMb">retentionInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_in_mb AppService#retention_in_mb}. |

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}.

---

##### `retentionInMb`<sup>Required</sup> <a name="retentionInMb" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.property.retentionInMb"></a>

```typescript
public readonly retentionInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#retention_in_mb AppService#retention_in_mb}.

---

### AppServiceSiteConfig <a name="AppServiceSiteConfig" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceSiteConfig: appService.AppServiceSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.acrUseManagedIdentityCredentials">acrUseManagedIdentityCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#acr_use_managed_identity_credentials AppService#acr_use_managed_identity_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.acrUserManagedIdentityClientId">acrUserManagedIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#acr_user_managed_identity_client_id AppService#acr_user_managed_identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#always_on AppService#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_command_line AppService#app_command_line}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#auto_swap_slot_name AppService#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#default_documents AppService#default_documents}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#dotnet_framework_version AppService#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.ftpsState">ftpsState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#ftps_state AppService#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#health_check_path AppService#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#http2_enabled AppService#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#ip_restriction AppService#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaContainer">javaContainer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#java_container AppService#java_container}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaContainerVersion">javaContainerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#java_container_version AppService#java_container_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaVersion">javaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#java_version AppService#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.linuxFxVersion">linuxFxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#linux_fx_version AppService#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.localMysqlEnabled">localMysqlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#local_mysql_enabled AppService#local_mysql_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#managed_pipeline_mode AppService#managed_pipeline_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#min_tls_version AppService#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#number_of_workers AppService#number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.phpVersion">phpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#php_version AppService#php_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#python_version AppService#python_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#remote_debugging_enabled AppService#remote_debugging_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#remote_debugging_version AppService#remote_debugging_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#scm_ip_restriction AppService#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmType">scmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#scm_type AppService#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#scm_use_main_ip_restriction AppService#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#use_32_bit_worker_process AppService#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#vnet_route_all_enabled AppService#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#websockets_enabled AppService#websockets_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.windowsFxVersion">windowsFxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#windows_fx_version AppService#windows_fx_version}. |

---

##### `acrUseManagedIdentityCredentials`<sup>Optional</sup> <a name="acrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.acrUseManagedIdentityCredentials"></a>

```typescript
public readonly acrUseManagedIdentityCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#acr_use_managed_identity_credentials AppService#acr_use_managed_identity_credentials}.

---

##### `acrUserManagedIdentityClientId`<sup>Optional</sup> <a name="acrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.acrUserManagedIdentityClientId"></a>

```typescript
public readonly acrUserManagedIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#acr_user_managed_identity_client_id AppService#acr_user_managed_identity_client_id}.

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#always_on AppService#always_on}.

---

##### `appCommandLine`<sup>Optional</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#app_command_line AppService#app_command_line}.

---

##### `autoSwapSlotName`<sup>Optional</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#auto_swap_slot_name AppService#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.cors"></a>

```typescript
public readonly cors: AppServiceSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#cors AppService#cors}

---

##### `defaultDocuments`<sup>Optional</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#default_documents AppService#default_documents}.

---

##### `dotnetFrameworkVersion`<sup>Optional</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.dotnetFrameworkVersion"></a>

```typescript
public readonly dotnetFrameworkVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#dotnet_framework_version AppService#dotnet_framework_version}.

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#ftps_state AppService#ftps_state}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#health_check_path AppService#health_check_path}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#http2_enabled AppService#http2_enabled}.

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: IResolvable | AppServiceSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#ip_restriction AppService#ip_restriction}.

---

##### `javaContainer`<sup>Optional</sup> <a name="javaContainer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaContainer"></a>

```typescript
public readonly javaContainer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#java_container AppService#java_container}.

---

##### `javaContainerVersion`<sup>Optional</sup> <a name="javaContainerVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaContainerVersion"></a>

```typescript
public readonly javaContainerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#java_container_version AppService#java_container_version}.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#java_version AppService#java_version}.

---

##### `linuxFxVersion`<sup>Optional</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.linuxFxVersion"></a>

```typescript
public readonly linuxFxVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#linux_fx_version AppService#linux_fx_version}.

---

##### `localMysqlEnabled`<sup>Optional</sup> <a name="localMysqlEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.localMysqlEnabled"></a>

```typescript
public readonly localMysqlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#local_mysql_enabled AppService#local_mysql_enabled}.

---

##### `managedPipelineMode`<sup>Optional</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#managed_pipeline_mode AppService#managed_pipeline_mode}.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#min_tls_version AppService#min_tls_version}.

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#number_of_workers AppService#number_of_workers}.

---

##### `phpVersion`<sup>Optional</sup> <a name="phpVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.phpVersion"></a>

```typescript
public readonly phpVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#php_version AppService#php_version}.

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#python_version AppService#python_version}.

---

##### `remoteDebuggingEnabled`<sup>Optional</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#remote_debugging_enabled AppService#remote_debugging_enabled}.

---

##### `remoteDebuggingVersion`<sup>Optional</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#remote_debugging_version AppService#remote_debugging_version}.

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: IResolvable | AppServiceSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#scm_ip_restriction AppService#scm_ip_restriction}.

---

##### `scmType`<sup>Optional</sup> <a name="scmType" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#scm_type AppService#scm_type}.

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#scm_use_main_ip_restriction AppService#scm_use_main_ip_restriction}.

---

##### `use32BitWorkerProcess`<sup>Optional</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.use32BitWorkerProcess"></a>

```typescript
public readonly use32BitWorkerProcess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#use_32_bit_worker_process AppService#use_32_bit_worker_process}.

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#vnet_route_all_enabled AppService#vnet_route_all_enabled}.

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#websockets_enabled AppService#websockets_enabled}.

---

##### `windowsFxVersion`<sup>Optional</sup> <a name="windowsFxVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.windowsFxVersion"></a>

```typescript
public readonly windowsFxVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#windows_fx_version AppService#windows_fx_version}.

---

### AppServiceSiteConfigCors <a name="AppServiceSiteConfigCors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceSiteConfigCors: appService.AppServiceSiteConfigCors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#allowed_origins AppService#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#support_credentials AppService#support_credentials}. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#allowed_origins AppService#allowed_origins}.

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#support_credentials AppService#support_credentials}.

---

### AppServiceSiteConfigIpRestriction <a name="AppServiceSiteConfigIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceSiteConfigIpRestriction: appService.AppServiceSiteConfigIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#action AppService#action}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#headers AppService#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#ip_address AppService#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#priority AppService#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#service_tag AppService#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#virtual_network_subnet_id AppService#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#action AppService#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | AppServiceSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#headers AppService#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#ip_address AppService#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#priority AppService#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#service_tag AppService#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#virtual_network_subnet_id AppService#virtual_network_subnet_id}.

---

### AppServiceSiteConfigIpRestrictionHeaders <a name="AppServiceSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceSiteConfigIpRestrictionHeaders: appService.AppServiceSiteConfigIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_azure_fdid AppService#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_fd_health_probe AppService#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_forwarded_for AppService#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_forwarded_host AppService#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_azure_fdid AppService#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_fd_health_probe AppService#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_forwarded_for AppService#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_forwarded_host AppService#x_forwarded_host}.

---

### AppServiceSiteConfigScmIpRestriction <a name="AppServiceSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceSiteConfigScmIpRestriction: appService.AppServiceSiteConfigScmIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#action AppService#action}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#headers AppService#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#ip_address AppService#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#priority AppService#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#service_tag AppService#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#virtual_network_subnet_id AppService#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#action AppService#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | AppServiceSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#headers AppService#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#ip_address AppService#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#priority AppService#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#service_tag AppService#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#virtual_network_subnet_id AppService#virtual_network_subnet_id}.

---

### AppServiceSiteConfigScmIpRestrictionHeaders <a name="AppServiceSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceSiteConfigScmIpRestrictionHeaders: appService.AppServiceSiteConfigScmIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_azure_fdid AppService#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_fd_health_probe AppService#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_forwarded_for AppService#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_forwarded_host AppService#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_azure_fdid AppService#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_fd_health_probe AppService#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_forwarded_for AppService#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#x_forwarded_host AppService#x_forwarded_host}.

---

### AppServiceSiteCredential <a name="AppServiceSiteCredential" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredential.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceSiteCredential: appService.AppServiceSiteCredential = { ... }
```


### AppServiceSourceControl <a name="AppServiceSourceControl" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceSourceControl: appService.AppServiceSourceControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#branch AppService#branch}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.manualIntegration">manualIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#manual_integration AppService#manual_integration}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.repoUrl">repoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#repo_url AppService#repo_url}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.rollbackEnabled">rollbackEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#rollback_enabled AppService#rollback_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.useMercurial">useMercurial</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#use_mercurial AppService#use_mercurial}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#branch AppService#branch}.

---

##### `manualIntegration`<sup>Optional</sup> <a name="manualIntegration" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.manualIntegration"></a>

```typescript
public readonly manualIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#manual_integration AppService#manual_integration}.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.repoUrl"></a>

```typescript
public readonly repoUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#repo_url AppService#repo_url}.

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.rollbackEnabled"></a>

```typescript
public readonly rollbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#rollback_enabled AppService#rollback_enabled}.

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.useMercurial"></a>

```typescript
public readonly useMercurial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#use_mercurial AppService#use_mercurial}.

---

### AppServiceStorageAccount <a name="AppServiceStorageAccount" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceStorageAccount: appService.AppServiceStorageAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.accessKey">accessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#access_key AppService#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#account_name AppService#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#share_name AppService#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#type AppService#type}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#mount_path AppService#mount_path}. |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#access_key AppService#access_key}.

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#account_name AppService#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#name AppService#name}.

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#share_name AppService#share_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#type AppService#type}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#mount_path AppService#mount_path}.

---

### AppServiceTimeouts <a name="AppServiceTimeouts" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

const appServiceTimeouts: appService.AppServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#create AppService#create}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#delete AppService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#read AppService#read}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#update AppService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#create AppService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#delete AppService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#read AppService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/app_service#update AppService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceAuthSettingsActiveDirectoryOutputReference <a name="AppServiceAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceAuthSettingsActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```typescript
public resetAllowedAudiences(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```typescript
public readonly allowedAudiencesInput: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a>

---


### AppServiceAuthSettingsFacebookOutputReference <a name="AppServiceAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceAuthSettingsFacebookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```typescript
public readonly appSecretInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a>

---


### AppServiceAuthSettingsGoogleOutputReference <a name="AppServiceAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceAuthSettingsGoogleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a>

---


### AppServiceAuthSettingsMicrosoftOutputReference <a name="AppServiceAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceAuthSettingsMicrosoftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a>

---


### AppServiceAuthSettingsOutputReference <a name="AppServiceAuthSettingsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceAuthSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putFacebook">putFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putGoogle">putGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putMicrosoft">putMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetAdditionalLoginParams">resetAdditionalLoginParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">resetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetDefaultProvider">resetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetFacebook">resetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetGoogle">resetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetMicrosoft">resetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTokenRefreshExtensionHours">resetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTokenStoreEnabled">resetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetUnauthenticatedClientAction">resetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putActiveDirectory"></a>

```typescript
public putActiveDirectory(value: AppServiceAuthSettingsActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a>

---

##### `putFacebook` <a name="putFacebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putFacebook"></a>

```typescript
public putFacebook(value: AppServiceAuthSettingsFacebook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a>

---

##### `putGoogle` <a name="putGoogle" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putGoogle"></a>

```typescript
public putGoogle(value: AppServiceAuthSettingsGoogle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a>

---

##### `putMicrosoft` <a name="putMicrosoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putMicrosoft"></a>

```typescript
public putMicrosoft(value: AppServiceAuthSettingsMicrosoft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putTwitter"></a>

```typescript
public putTwitter(value: AppServiceAuthSettingsTwitter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetAdditionalLoginParams` <a name="resetAdditionalLoginParams" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```typescript
public resetAdditionalLoginParams(): void
```

##### `resetAllowedExternalRedirectUrls` <a name="resetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```typescript
public resetAllowedExternalRedirectUrls(): void
```

##### `resetDefaultProvider` <a name="resetDefaultProvider" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetDefaultProvider"></a>

```typescript
public resetDefaultProvider(): void
```

##### `resetFacebook` <a name="resetFacebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetFacebook"></a>

```typescript
public resetFacebook(): void
```

##### `resetGoogle` <a name="resetGoogle" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetGoogle"></a>

```typescript
public resetGoogle(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetMicrosoft` <a name="resetMicrosoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetMicrosoft"></a>

```typescript
public resetMicrosoft(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```

##### `resetTokenRefreshExtensionHours` <a name="resetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```typescript
public resetTokenRefreshExtensionHours(): void
```

##### `resetTokenStoreEnabled` <a name="resetTokenStoreEnabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```typescript
public resetTokenStoreEnabled(): void
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTwitter"></a>

```typescript
public resetTwitter(): void
```

##### `resetUnauthenticatedClientAction` <a name="resetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```typescript
public resetUnauthenticatedClientAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference">AppServiceAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference">AppServiceAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference">AppServiceAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference">AppServiceAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference">AppServiceAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.additionalLoginParamsInput">additionalLoginParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowedExternalRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.defaultProviderInput">defaultProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.facebookInput">facebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.googleInput">googleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.microsoftInput">microsoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">tokenRefreshExtensionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenStoreEnabledInput">tokenStoreEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticatedClientActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.additionalLoginParams">additionalLoginParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: AppServiceAuthSettingsActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference">AppServiceAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.facebook"></a>

```typescript
public readonly facebook: AppServiceAuthSettingsFacebookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference">AppServiceAuthSettingsFacebookOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.google"></a>

```typescript
public readonly google: AppServiceAuthSettingsGoogleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference">AppServiceAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.microsoft"></a>

```typescript
public readonly microsoft: AppServiceAuthSettingsMicrosoftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference">AppServiceAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.twitter"></a>

```typescript
public readonly twitter: AppServiceAuthSettingsTwitterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference">AppServiceAuthSettingsTwitterOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: AppServiceAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a>

---

##### `additionalLoginParamsInput`<sup>Optional</sup> <a name="additionalLoginParamsInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```typescript
public readonly additionalLoginParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="allowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```typescript
public readonly allowedExternalRedirectUrlsInput: string[];
```

- *Type:* string[]

---

##### `defaultProviderInput`<sup>Optional</sup> <a name="defaultProviderInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.defaultProviderInput"></a>

```typescript
public readonly defaultProviderInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `facebookInput`<sup>Optional</sup> <a name="facebookInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.facebookInput"></a>

```typescript
public readonly facebookInput: AppServiceAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a>

---

##### `googleInput`<sup>Optional</sup> <a name="googleInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.googleInput"></a>

```typescript
public readonly googleInput: AppServiceAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `microsoftInput`<sup>Optional</sup> <a name="microsoftInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.microsoftInput"></a>

```typescript
public readonly microsoftInput: AppServiceAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="tokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```typescript
public readonly tokenRefreshExtensionHoursInput: number;
```

- *Type:* number

---

##### `tokenStoreEnabledInput`<sup>Optional</sup> <a name="tokenStoreEnabledInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```typescript
public readonly tokenStoreEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.twitterInput"></a>

```typescript
public readonly twitterInput: AppServiceAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a>

---

##### `unauthenticatedClientActionInput`<sup>Optional</sup> <a name="unauthenticatedClientActionInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```typescript
public readonly unauthenticatedClientActionInput: string;
```

- *Type:* string

---

##### `additionalLoginParams`<sup>Required</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.additionalLoginParams"></a>

```typescript
public readonly additionalLoginParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a>

---


### AppServiceAuthSettingsTwitterOutputReference <a name="AppServiceAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceAuthSettingsTwitterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```typescript
public readonly consumerKeyInput: string;
```

- *Type:* string

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```typescript
public readonly consumerSecretInput: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a>

---


### AppServiceBackupOutputReference <a name="AppServiceBackupOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: AppServiceBackupSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference">AppServiceBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.storageAccountUrlInput">storageAccountUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.schedule"></a>

```typescript
public readonly schedule: AppServiceBackupScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference">AppServiceBackupScheduleOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: AppServiceBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a>

---

##### `storageAccountUrlInput`<sup>Optional</sup> <a name="storageAccountUrlInput" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.storageAccountUrlInput"></a>

```typescript
public readonly storageAccountUrlInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a>

---


### AppServiceBackupScheduleOutputReference <a name="AppServiceBackupScheduleOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetKeepAtLeastOneBackup">resetKeepAtLeastOneBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetRetentionPeriodInDays">resetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepAtLeastOneBackup` <a name="resetKeepAtLeastOneBackup" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetKeepAtLeastOneBackup"></a>

```typescript
public resetKeepAtLeastOneBackup(): void
```

##### `resetRetentionPeriodInDays` <a name="resetRetentionPeriodInDays" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```typescript
public resetRetentionPeriodInDays(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyUnitInput">frequencyUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.keepAtLeastOneBackupInput">keepAtLeastOneBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.retentionPeriodInDaysInput">retentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyUnit">frequencyUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `frequencyUnitInput`<sup>Optional</sup> <a name="frequencyUnitInput" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyUnitInput"></a>

```typescript
public readonly frequencyUnitInput: string;
```

- *Type:* string

---

##### `keepAtLeastOneBackupInput`<sup>Optional</sup> <a name="keepAtLeastOneBackupInput" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.keepAtLeastOneBackupInput"></a>

```typescript
public readonly keepAtLeastOneBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodInDaysInput`<sup>Optional</sup> <a name="retentionPeriodInDaysInput" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```typescript
public readonly retentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyUnit"></a>

```typescript
public readonly frequencyUnit: string;
```

- *Type:* string

---

##### `keepAtLeastOneBackup`<sup>Required</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```typescript
public readonly keepAtLeastOneBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a>

---


### AppServiceConnectionStringList <a name="AppServiceConnectionStringList" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.get"></a>

```typescript
public get(index: number): AppServiceConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>[]

---


### AppServiceConnectionStringOutputReference <a name="AppServiceConnectionStringOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceConnectionString;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>

---


### AppServiceIdentityOutputReference <a name="AppServiceIdentityOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a>

---


### AppServiceLogsApplicationLogsAzureBlobStorageOutputReference <a name="AppServiceLogsApplicationLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput">sasUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl">sasUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `sasUrlInput`<sup>Optional</sup> <a name="sasUrlInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```typescript
public readonly sasUrlInput: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceLogsApplicationLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a>

---


### AppServiceLogsApplicationLogsOutputReference <a name="AppServiceLogsApplicationLogsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceLogsApplicationLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.putAzureBlobStorage">putAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resetAzureBlobStorage">resetAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resetFileSystemLevel">resetFileSystemLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobStorage` <a name="putAzureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.putAzureBlobStorage"></a>

```typescript
public putAzureBlobStorage(value: AppServiceLogsApplicationLogsAzureBlobStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a>

---

##### `resetAzureBlobStorage` <a name="resetAzureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resetAzureBlobStorage"></a>

```typescript
public resetAzureBlobStorage(): void
```

##### `resetFileSystemLevel` <a name="resetFileSystemLevel" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resetFileSystemLevel"></a>

```typescript
public resetFileSystemLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceLogsApplicationLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.azureBlobStorageInput">azureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fileSystemLevelInput">fileSystemLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fileSystemLevel">fileSystemLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureBlobStorage`<sup>Required</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: AppServiceLogsApplicationLogsAzureBlobStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceLogsApplicationLogsAzureBlobStorageOutputReference</a>

---

##### `azureBlobStorageInput`<sup>Optional</sup> <a name="azureBlobStorageInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.azureBlobStorageInput"></a>

```typescript
public readonly azureBlobStorageInput: AppServiceLogsApplicationLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a>

---

##### `fileSystemLevelInput`<sup>Optional</sup> <a name="fileSystemLevelInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fileSystemLevelInput"></a>

```typescript
public readonly fileSystemLevelInput: string;
```

- *Type:* string

---

##### `fileSystemLevel`<sup>Required</sup> <a name="fileSystemLevel" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fileSystemLevel"></a>

```typescript
public readonly fileSystemLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceLogsApplicationLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a>

---


### AppServiceLogsHttpLogsAzureBlobStorageOutputReference <a name="AppServiceLogsHttpLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput">sasUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl">sasUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `sasUrlInput`<sup>Optional</sup> <a name="sasUrlInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```typescript
public readonly sasUrlInput: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `sasUrl`<sup>Required</sup> <a name="sasUrl" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```typescript
public readonly sasUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceLogsHttpLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a>

---


### AppServiceLogsHttpLogsFileSystemOutputReference <a name="AppServiceLogsHttpLogsFileSystemOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceLogsHttpLogsFileSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput">retentionInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInMb">retentionInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `retentionInMbInput`<sup>Optional</sup> <a name="retentionInMbInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput"></a>

```typescript
public readonly retentionInMbInput: number;
```

- *Type:* number

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `retentionInMb`<sup>Required</sup> <a name="retentionInMb" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInMb"></a>

```typescript
public readonly retentionInMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceLogsHttpLogsFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a>

---


### AppServiceLogsHttpLogsOutputReference <a name="AppServiceLogsHttpLogsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceLogsHttpLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putAzureBlobStorage">putAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putFileSystem">putFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resetAzureBlobStorage">resetAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resetFileSystem">resetFileSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureBlobStorage` <a name="putAzureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putAzureBlobStorage"></a>

```typescript
public putAzureBlobStorage(value: AppServiceLogsHttpLogsAzureBlobStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a>

---

##### `putFileSystem` <a name="putFileSystem" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putFileSystem"></a>

```typescript
public putFileSystem(value: AppServiceLogsHttpLogsFileSystem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a>

---

##### `resetAzureBlobStorage` <a name="resetAzureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resetAzureBlobStorage"></a>

```typescript
public resetAzureBlobStorage(): void
```

##### `resetFileSystem` <a name="resetFileSystem" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resetFileSystem"></a>

```typescript
public resetFileSystem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.azureBlobStorage">azureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference">AppServiceLogsHttpLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fileSystem">fileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference">AppServiceLogsHttpLogsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.azureBlobStorageInput">azureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fileSystemInput">fileSystemInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureBlobStorage`<sup>Required</sup> <a name="azureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.azureBlobStorage"></a>

```typescript
public readonly azureBlobStorage: AppServiceLogsHttpLogsAzureBlobStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference">AppServiceLogsHttpLogsAzureBlobStorageOutputReference</a>

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fileSystem"></a>

```typescript
public readonly fileSystem: AppServiceLogsHttpLogsFileSystemOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference">AppServiceLogsHttpLogsFileSystemOutputReference</a>

---

##### `azureBlobStorageInput`<sup>Optional</sup> <a name="azureBlobStorageInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.azureBlobStorageInput"></a>

```typescript
public readonly azureBlobStorageInput: AppServiceLogsHttpLogsAzureBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a>

---

##### `fileSystemInput`<sup>Optional</sup> <a name="fileSystemInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fileSystemInput"></a>

```typescript
public readonly fileSystemInput: AppServiceLogsHttpLogsFileSystem;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceLogsHttpLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a>

---


### AppServiceLogsOutputReference <a name="AppServiceLogsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putApplicationLogs">putApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putHttpLogs">putHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetApplicationLogs">resetApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetDetailedErrorMessagesEnabled">resetDetailedErrorMessagesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetFailedRequestTracingEnabled">resetFailedRequestTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetHttpLogs">resetHttpLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationLogs` <a name="putApplicationLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putApplicationLogs"></a>

```typescript
public putApplicationLogs(value: AppServiceLogsApplicationLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a>

---

##### `putHttpLogs` <a name="putHttpLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putHttpLogs"></a>

```typescript
public putHttpLogs(value: AppServiceLogsHttpLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putHttpLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a>

---

##### `resetApplicationLogs` <a name="resetApplicationLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetApplicationLogs"></a>

```typescript
public resetApplicationLogs(): void
```

##### `resetDetailedErrorMessagesEnabled` <a name="resetDetailedErrorMessagesEnabled" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetDetailedErrorMessagesEnabled"></a>

```typescript
public resetDetailedErrorMessagesEnabled(): void
```

##### `resetFailedRequestTracingEnabled` <a name="resetFailedRequestTracingEnabled" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetFailedRequestTracingEnabled"></a>

```typescript
public resetFailedRequestTracingEnabled(): void
```

##### `resetHttpLogs` <a name="resetHttpLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetHttpLogs"></a>

```typescript
public resetHttpLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference">AppServiceLogsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.httpLogs">httpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference">AppServiceLogsHttpLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.applicationLogsInput">applicationLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.detailedErrorMessagesEnabledInput">detailedErrorMessagesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.failedRequestTracingEnabledInput">failedRequestTracingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.httpLogsInput">httpLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.detailedErrorMessagesEnabled">detailedErrorMessagesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.failedRequestTracingEnabled">failedRequestTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: AppServiceLogsApplicationLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference">AppServiceLogsApplicationLogsOutputReference</a>

---

##### `httpLogs`<sup>Required</sup> <a name="httpLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.httpLogs"></a>

```typescript
public readonly httpLogs: AppServiceLogsHttpLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference">AppServiceLogsHttpLogsOutputReference</a>

---

##### `applicationLogsInput`<sup>Optional</sup> <a name="applicationLogsInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.applicationLogsInput"></a>

```typescript
public readonly applicationLogsInput: AppServiceLogsApplicationLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a>

---

##### `detailedErrorMessagesEnabledInput`<sup>Optional</sup> <a name="detailedErrorMessagesEnabledInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.detailedErrorMessagesEnabledInput"></a>

```typescript
public readonly detailedErrorMessagesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedRequestTracingEnabledInput`<sup>Optional</sup> <a name="failedRequestTracingEnabledInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.failedRequestTracingEnabledInput"></a>

```typescript
public readonly failedRequestTracingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpLogsInput`<sup>Optional</sup> <a name="httpLogsInput" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.httpLogsInput"></a>

```typescript
public readonly httpLogsInput: AppServiceLogsHttpLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a>

---

##### `detailedErrorMessagesEnabled`<sup>Required</sup> <a name="detailedErrorMessagesEnabled" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.detailedErrorMessagesEnabled"></a>

```typescript
public readonly detailedErrorMessagesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedRequestTracingEnabled`<sup>Required</sup> <a name="failedRequestTracingEnabled" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.failedRequestTracingEnabled"></a>

```typescript
public readonly failedRequestTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a>

---


### AppServiceSiteConfigCorsOutputReference <a name="AppServiceSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```typescript
public resetSupportCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```typescript
public readonly supportCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a>

---


### AppServiceSiteConfigIpRestrictionHeadersList <a name="AppServiceSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): AppServiceSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>[]

---


### AppServiceSiteConfigIpRestrictionHeadersOutputReference <a name="AppServiceSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSiteConfigIpRestrictionHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>

---


### AppServiceSiteConfigIpRestrictionList <a name="AppServiceSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.get"></a>

```typescript
public get(index: number): AppServiceSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>[]

---


### AppServiceSiteConfigIpRestrictionOutputReference <a name="AppServiceSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | AppServiceSiteConfigIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList">AppServiceSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: AppServiceSiteConfigIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList">AppServiceSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | AppServiceSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSiteConfigIpRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>

---


### AppServiceSiteConfigOutputReference <a name="AppServiceSiteConfigOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials">resetAcrUseManagedIdentityCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAcrUserManagedIdentityClientId">resetAcrUserManagedIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAppCommandLine">resetAppCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAutoSwapSlotName">resetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetDefaultDocuments">resetDefaultDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetDotnetFrameworkVersion">resetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaContainer">resetJavaContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaContainerVersion">resetJavaContainerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetLinuxFxVersion">resetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetLocalMysqlEnabled">resetLocalMysqlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetManagedPipelineMode">resetManagedPipelineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetPhpVersion">resetPhpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetRemoteDebuggingEnabled">resetRemoteDebuggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetRemoteDebuggingVersion">resetRemoteDebuggingVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmType">resetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetUse32BitWorkerProcess">resetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetWindowsFxVersion">resetWindowsFxVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putCors"></a>

```typescript
public putCors(value: AppServiceSiteConfigCors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putIpRestriction"></a>

```typescript
public putIpRestriction(value: IResolvable | AppServiceSiteConfigIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>[]

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putScmIpRestriction"></a>

```typescript
public putScmIpRestriction(value: IResolvable | AppServiceSiteConfigScmIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>[]

---

##### `resetAcrUseManagedIdentityCredentials` <a name="resetAcrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials"></a>

```typescript
public resetAcrUseManagedIdentityCredentials(): void
```

##### `resetAcrUserManagedIdentityClientId` <a name="resetAcrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAcrUserManagedIdentityClientId"></a>

```typescript
public resetAcrUserManagedIdentityClientId(): void
```

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAlwaysOn"></a>

```typescript
public resetAlwaysOn(): void
```

##### `resetAppCommandLine` <a name="resetAppCommandLine" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAppCommandLine"></a>

```typescript
public resetAppCommandLine(): void
```

##### `resetAutoSwapSlotName` <a name="resetAutoSwapSlotName" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```typescript
public resetAutoSwapSlotName(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetDefaultDocuments` <a name="resetDefaultDocuments" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetDefaultDocuments"></a>

```typescript
public resetDefaultDocuments(): void
```

##### `resetDotnetFrameworkVersion` <a name="resetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```typescript
public resetDotnetFrameworkVersion(): void
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetFtpsState"></a>

```typescript
public resetFtpsState(): void
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetHealthCheckPath"></a>

```typescript
public resetHealthCheckPath(): void
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetHttp2Enabled"></a>

```typescript
public resetHttp2Enabled(): void
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetIpRestriction"></a>

```typescript
public resetIpRestriction(): void
```

##### `resetJavaContainer` <a name="resetJavaContainer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaContainer"></a>

```typescript
public resetJavaContainer(): void
```

##### `resetJavaContainerVersion` <a name="resetJavaContainerVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaContainerVersion"></a>

```typescript
public resetJavaContainerVersion(): void
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaVersion"></a>

```typescript
public resetJavaVersion(): void
```

##### `resetLinuxFxVersion` <a name="resetLinuxFxVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetLinuxFxVersion"></a>

```typescript
public resetLinuxFxVersion(): void
```

##### `resetLocalMysqlEnabled` <a name="resetLocalMysqlEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetLocalMysqlEnabled"></a>

```typescript
public resetLocalMysqlEnabled(): void
```

##### `resetManagedPipelineMode` <a name="resetManagedPipelineMode" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetManagedPipelineMode"></a>

```typescript
public resetManagedPipelineMode(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetNumberOfWorkers"></a>

```typescript
public resetNumberOfWorkers(): void
```

##### `resetPhpVersion` <a name="resetPhpVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetPhpVersion"></a>

```typescript
public resetPhpVersion(): void
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetPythonVersion"></a>

```typescript
public resetPythonVersion(): void
```

##### `resetRemoteDebuggingEnabled` <a name="resetRemoteDebuggingEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```typescript
public resetRemoteDebuggingEnabled(): void
```

##### `resetRemoteDebuggingVersion` <a name="resetRemoteDebuggingVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```typescript
public resetRemoteDebuggingVersion(): void
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmIpRestriction"></a>

```typescript
public resetScmIpRestriction(): void
```

##### `resetScmType` <a name="resetScmType" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmType"></a>

```typescript
public resetScmType(): void
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```typescript
public resetScmUseMainIpRestriction(): void
```

##### `resetUse32BitWorkerProcess` <a name="resetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```typescript
public resetUse32BitWorkerProcess(): void
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```typescript
public resetVnetRouteAllEnabled(): void
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```typescript
public resetWebsocketsEnabled(): void
```

##### `resetWindowsFxVersion` <a name="resetWindowsFxVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetWindowsFxVersion"></a>

```typescript
public resetWindowsFxVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference">AppServiceSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList">AppServiceSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList">AppServiceSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput">acrUseManagedIdentityCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput">acrUserManagedIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.appCommandLineInput">appCommandLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.autoSwapSlotNameInput">autoSwapSlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.defaultDocumentsInput">defaultDocumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnetFrameworkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerInput">javaContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerVersionInput">javaContainerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaVersionInput">javaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.linuxFxVersionInput">linuxFxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.localMysqlEnabledInput">localMysqlEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.managedPipelineModeInput">managedPipelineModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.phpVersionInput">phpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingEnabledInput">remoteDebuggingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingVersionInput">remoteDebuggingVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmTypeInput">scmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32BitWorkerProcessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.windowsFxVersionInput">windowsFxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentials">acrUseManagedIdentityCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientId">acrUserManagedIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainer">javaContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerVersion">javaContainerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.linuxFxVersion">linuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.localMysqlEnabled">localMysqlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.phpVersion">phpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.windowsFxVersion">windowsFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.cors"></a>

```typescript
public readonly cors: AppServiceSiteConfigCorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference">AppServiceSiteConfigCorsOutputReference</a>

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: AppServiceSiteConfigIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList">AppServiceSiteConfigIpRestrictionList</a>

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: AppServiceSiteConfigScmIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList">AppServiceSiteConfigScmIpRestrictionList</a>

---

##### `acrUseManagedIdentityCredentialsInput`<sup>Optional</sup> <a name="acrUseManagedIdentityCredentialsInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput"></a>

```typescript
public readonly acrUseManagedIdentityCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acrUserManagedIdentityClientIdInput`<sup>Optional</sup> <a name="acrUserManagedIdentityClientIdInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput"></a>

```typescript
public readonly acrUserManagedIdentityClientIdInput: string;
```

- *Type:* string

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.alwaysOnInput"></a>

```typescript
public readonly alwaysOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appCommandLineInput`<sup>Optional</sup> <a name="appCommandLineInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.appCommandLineInput"></a>

```typescript
public readonly appCommandLineInput: string;
```

- *Type:* string

---

##### `autoSwapSlotNameInput`<sup>Optional</sup> <a name="autoSwapSlotNameInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```typescript
public readonly autoSwapSlotNameInput: string;
```

- *Type:* string

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.corsInput"></a>

```typescript
public readonly corsInput: AppServiceSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a>

---

##### `defaultDocumentsInput`<sup>Optional</sup> <a name="defaultDocumentsInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```typescript
public readonly defaultDocumentsInput: string[];
```

- *Type:* string[]

---

##### `dotnetFrameworkVersionInput`<sup>Optional</sup> <a name="dotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```typescript
public readonly dotnetFrameworkVersionInput: string;
```

- *Type:* string

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ftpsStateInput"></a>

```typescript
public readonly ftpsStateInput: string;
```

- *Type:* string

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.healthCheckPathInput"></a>

```typescript
public readonly healthCheckPathInput: string;
```

- *Type:* string

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.http2EnabledInput"></a>

```typescript
public readonly http2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ipRestrictionInput"></a>

```typescript
public readonly ipRestrictionInput: IResolvable | AppServiceSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>[]

---

##### `javaContainerInput`<sup>Optional</sup> <a name="javaContainerInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerInput"></a>

```typescript
public readonly javaContainerInput: string;
```

- *Type:* string

---

##### `javaContainerVersionInput`<sup>Optional</sup> <a name="javaContainerVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerVersionInput"></a>

```typescript
public readonly javaContainerVersionInput: string;
```

- *Type:* string

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaVersionInput"></a>

```typescript
public readonly javaVersionInput: string;
```

- *Type:* string

---

##### `linuxFxVersionInput`<sup>Optional</sup> <a name="linuxFxVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```typescript
public readonly linuxFxVersionInput: string;
```

- *Type:* string

---

##### `localMysqlEnabledInput`<sup>Optional</sup> <a name="localMysqlEnabledInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.localMysqlEnabledInput"></a>

```typescript
public readonly localMysqlEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedPipelineModeInput`<sup>Optional</sup> <a name="managedPipelineModeInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```typescript
public readonly managedPipelineModeInput: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.numberOfWorkersInput"></a>

```typescript
public readonly numberOfWorkersInput: number;
```

- *Type:* number

---

##### `phpVersionInput`<sup>Optional</sup> <a name="phpVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.phpVersionInput"></a>

```typescript
public readonly phpVersionInput: string;
```

- *Type:* string

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.pythonVersionInput"></a>

```typescript
public readonly pythonVersionInput: string;
```

- *Type:* string

---

##### `remoteDebuggingEnabledInput`<sup>Optional</sup> <a name="remoteDebuggingEnabledInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```typescript
public readonly remoteDebuggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersionInput`<sup>Optional</sup> <a name="remoteDebuggingVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```typescript
public readonly remoteDebuggingVersionInput: string;
```

- *Type:* string

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```typescript
public readonly scmIpRestrictionInput: IResolvable | AppServiceSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>[]

---

##### `scmTypeInput`<sup>Optional</sup> <a name="scmTypeInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmTypeInput"></a>

```typescript
public readonly scmTypeInput: string;
```

- *Type:* string

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```typescript
public readonly scmUseMainIpRestrictionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorkerProcessInput`<sup>Optional</sup> <a name="use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```typescript
public readonly use32BitWorkerProcessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```typescript
public readonly vnetRouteAllEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```typescript
public readonly websocketsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `windowsFxVersionInput`<sup>Optional</sup> <a name="windowsFxVersionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.windowsFxVersionInput"></a>

```typescript
public readonly windowsFxVersionInput: string;
```

- *Type:* string

---

##### `acrUseManagedIdentityCredentials`<sup>Required</sup> <a name="acrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentials"></a>

```typescript
public readonly acrUseManagedIdentityCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acrUserManagedIdentityClientId`<sup>Required</sup> <a name="acrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientId"></a>

```typescript
public readonly acrUserManagedIdentityClientId: string;
```

- *Type:* string

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appCommandLine`<sup>Required</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

---

##### `autoSwapSlotName`<sup>Required</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

---

##### `defaultDocuments`<sup>Required</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

---

##### `dotnetFrameworkVersion`<sup>Required</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```typescript
public readonly dotnetFrameworkVersion: string;
```

- *Type:* string

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javaContainer`<sup>Required</sup> <a name="javaContainer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainer"></a>

```typescript
public readonly javaContainer: string;
```

- *Type:* string

---

##### `javaContainerVersion`<sup>Required</sup> <a name="javaContainerVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerVersion"></a>

```typescript
public readonly javaContainerVersion: string;
```

- *Type:* string

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `linuxFxVersion`<sup>Required</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.linuxFxVersion"></a>

```typescript
public readonly linuxFxVersion: string;
```

- *Type:* string

---

##### `localMysqlEnabled`<sup>Required</sup> <a name="localMysqlEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.localMysqlEnabled"></a>

```typescript
public readonly localMysqlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedPipelineMode`<sup>Required</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `phpVersion`<sup>Required</sup> <a name="phpVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.phpVersion"></a>

```typescript
public readonly phpVersion: string;
```

- *Type:* string

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteDebuggingVersion`<sup>Required</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorkerProcess`<sup>Required</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```typescript
public readonly use32BitWorkerProcess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `windowsFxVersion`<sup>Required</sup> <a name="windowsFxVersion" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.windowsFxVersion"></a>

```typescript
public readonly windowsFxVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a>

---


### AppServiceSiteConfigScmIpRestrictionHeadersList <a name="AppServiceSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigScmIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): AppServiceSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>[]

---


### AppServiceSiteConfigScmIpRestrictionHeadersOutputReference <a name="AppServiceSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSiteConfigScmIpRestrictionHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>

---


### AppServiceSiteConfigScmIpRestrictionList <a name="AppServiceSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigScmIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.get"></a>

```typescript
public get(index: number): AppServiceSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>[]

---


### AppServiceSiteConfigScmIpRestrictionOutputReference <a name="AppServiceSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteConfigScmIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | AppServiceSiteConfigScmIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList">AppServiceSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: AppServiceSiteConfigScmIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList">AppServiceSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | AppServiceSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSiteConfigScmIpRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>

---


### AppServiceSiteCredentialList <a name="AppServiceSiteCredentialList" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.get"></a>

```typescript
public get(index: number): AppServiceSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AppServiceSiteCredentialOutputReference <a name="AppServiceSiteCredentialOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSiteCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredential">AppServiceSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSiteCredential;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredential">AppServiceSiteCredential</a>

---


### AppServiceSourceControlOutputReference <a name="AppServiceSourceControlOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceSourceControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetManualIntegration">resetManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetRepoUrl">resetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetRollbackEnabled">resetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetUseMercurial">resetUseMercurial</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetManualIntegration` <a name="resetManualIntegration" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetManualIntegration"></a>

```typescript
public resetManualIntegration(): void
```

##### `resetRepoUrl` <a name="resetRepoUrl" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetRepoUrl"></a>

```typescript
public resetRepoUrl(): void
```

##### `resetRollbackEnabled` <a name="resetRollbackEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetRollbackEnabled"></a>

```typescript
public resetRollbackEnabled(): void
```

##### `resetUseMercurial` <a name="resetUseMercurial" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetUseMercurial"></a>

```typescript
public resetUseMercurial(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.manualIntegrationInput">manualIntegrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.repoUrlInput">repoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.rollbackEnabledInput">rollbackEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.useMercurialInput">useMercurialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.manualIntegration">manualIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.repoUrl">repoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.rollbackEnabled">rollbackEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.useMercurial">useMercurial</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `manualIntegrationInput`<sup>Optional</sup> <a name="manualIntegrationInput" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.manualIntegrationInput"></a>

```typescript
public readonly manualIntegrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repoUrlInput`<sup>Optional</sup> <a name="repoUrlInput" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.repoUrlInput"></a>

```typescript
public readonly repoUrlInput: string;
```

- *Type:* string

---

##### `rollbackEnabledInput`<sup>Optional</sup> <a name="rollbackEnabledInput" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.rollbackEnabledInput"></a>

```typescript
public readonly rollbackEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMercurialInput`<sup>Optional</sup> <a name="useMercurialInput" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.useMercurialInput"></a>

```typescript
public readonly useMercurialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `manualIntegration`<sup>Required</sup> <a name="manualIntegration" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.manualIntegration"></a>

```typescript
public readonly manualIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repoUrl`<sup>Required</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.repoUrl"></a>

```typescript
public readonly repoUrl: string;
```

- *Type:* string

---

##### `rollbackEnabled`<sup>Required</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.rollbackEnabled"></a>

```typescript
public readonly rollbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMercurial`<sup>Required</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.useMercurial"></a>

```typescript
public readonly useMercurial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSourceControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a>

---


### AppServiceStorageAccountList <a name="AppServiceStorageAccountList" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceStorageAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.get"></a>

```typescript
public get(index: number): AppServiceStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>[]

---


### AppServiceStorageAccountOutputReference <a name="AppServiceStorageAccountOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceStorageAccount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>

---


### AppServiceTimeoutsOutputReference <a name="AppServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { appService } from '@cdktf/provider-azurerm'

new appService.AppServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>

---



