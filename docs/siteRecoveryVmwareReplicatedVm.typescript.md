# `siteRecoveryVmwareReplicatedVm` Submodule <a name="`siteRecoveryVmwareReplicatedVm` Submodule" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryVmwareReplicatedVm <a name="SiteRecoveryVmwareReplicatedVm" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm azurerm_site_recovery_vmware_replicated_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

new siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm(scope: Construct, id: string, config: SiteRecoveryVmwareReplicatedVmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig">SiteRecoveryVmwareReplicatedVmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig">SiteRecoveryVmwareReplicatedVmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putManagedDisk">putManagedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultLogStorageAccountId">resetDefaultLogStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultRecoveryDiskType">resetDefaultRecoveryDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultTargetDiskEncryptionSetId">resetDefaultTargetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetManagedDisk">resetManagedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetMultiVmGroupName">resetMultiVmGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetAvailabilitySetId">resetTargetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetBootDiagnosticsStorageAccountId">resetTargetBootDiagnosticsStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetNetworkId">resetTargetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetProximityPlacementGroupId">resetTargetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetVmSize">resetTargetVmSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetZone">resetTargetZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTestNetworkId">resetTestNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManagedDisk` <a name="putManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putManagedDisk"></a>

```typescript
public putManagedDisk(value: IResolvable | SiteRecoveryVmwareReplicatedVmManagedDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putManagedDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>[]

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | SiteRecoveryVmwareReplicatedVmNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts"></a>

```typescript
public putTimeouts(value: SiteRecoveryVmwareReplicatedVmTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>

---

##### `resetDefaultLogStorageAccountId` <a name="resetDefaultLogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultLogStorageAccountId"></a>

```typescript
public resetDefaultLogStorageAccountId(): void
```

##### `resetDefaultRecoveryDiskType` <a name="resetDefaultRecoveryDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultRecoveryDiskType"></a>

```typescript
public resetDefaultRecoveryDiskType(): void
```

##### `resetDefaultTargetDiskEncryptionSetId` <a name="resetDefaultTargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultTargetDiskEncryptionSetId"></a>

```typescript
public resetDefaultTargetDiskEncryptionSetId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetLicenseType"></a>

```typescript
public resetLicenseType(): void
```

##### `resetManagedDisk` <a name="resetManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetManagedDisk"></a>

```typescript
public resetManagedDisk(): void
```

##### `resetMultiVmGroupName` <a name="resetMultiVmGroupName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetMultiVmGroupName"></a>

```typescript
public resetMultiVmGroupName(): void
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetNetworkInterface"></a>

```typescript
public resetNetworkInterface(): void
```

##### `resetTargetAvailabilitySetId` <a name="resetTargetAvailabilitySetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetAvailabilitySetId"></a>

```typescript
public resetTargetAvailabilitySetId(): void
```

##### `resetTargetBootDiagnosticsStorageAccountId` <a name="resetTargetBootDiagnosticsStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetBootDiagnosticsStorageAccountId"></a>

```typescript
public resetTargetBootDiagnosticsStorageAccountId(): void
```

##### `resetTargetNetworkId` <a name="resetTargetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetNetworkId"></a>

```typescript
public resetTargetNetworkId(): void
```

##### `resetTargetProximityPlacementGroupId` <a name="resetTargetProximityPlacementGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetProximityPlacementGroupId"></a>

```typescript
public resetTargetProximityPlacementGroupId(): void
```

##### `resetTargetVmSize` <a name="resetTargetVmSize" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetVmSize"></a>

```typescript
public resetTargetVmSize(): void
```

##### `resetTargetZone` <a name="resetTargetZone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetZone"></a>

```typescript
public resetTargetZone(): void
```

##### `resetTestNetworkId` <a name="resetTestNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTestNetworkId"></a>

```typescript
public resetTestNetworkId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryVmwareReplicatedVm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SiteRecoveryVmwareReplicatedVm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SiteRecoveryVmwareReplicatedVm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SiteRecoveryVmwareReplicatedVm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryVmwareReplicatedVm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDisk">managedDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList">SiteRecoveryVmwareReplicatedVmManagedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList">SiteRecoveryVmwareReplicatedVmNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference">SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceNameInput">applianceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountIdInput">defaultLogStorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskTypeInput">defaultRecoveryDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetIdInput">defaultTargetDiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDiskInput">managedDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupNameInput">multiVmGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialNameInput">physicalServerCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyIdInput">recoveryReplicationPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultIdInput">recoveryVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmNameInput">sourceVmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetIdInput">targetAvailabilitySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountIdInput">targetBootDiagnosticsStorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkIdInput">targetNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupIdInput">targetProximityPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupIdInput">targetResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmNameInput">targetVmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSizeInput">targetVmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZoneInput">targetZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkIdInput">testNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceName">applianceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountId">defaultLogStorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskType">defaultRecoveryDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetId">defaultTargetDiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupName">multiVmGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialName">physicalServerCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyId">recoveryReplicationPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultId">recoveryVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmName">sourceVmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetId">targetAvailabilitySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountId">targetBootDiagnosticsStorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkId">targetNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupId">targetProximityPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupId">targetResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmName">targetVmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSize">targetVmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZone">targetZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkId">testNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDisk`<sup>Required</sup> <a name="managedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDisk"></a>

```typescript
public readonly managedDisk: SiteRecoveryVmwareReplicatedVmManagedDiskList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList">SiteRecoveryVmwareReplicatedVmManagedDiskList</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterface"></a>

```typescript
public readonly networkInterface: SiteRecoveryVmwareReplicatedVmNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList">SiteRecoveryVmwareReplicatedVmNetworkInterfaceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference">SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference</a>

---

##### `applianceNameInput`<sup>Optional</sup> <a name="applianceNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceNameInput"></a>

```typescript
public readonly applianceNameInput: string;
```

- *Type:* string

---

##### `defaultLogStorageAccountIdInput`<sup>Optional</sup> <a name="defaultLogStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountIdInput"></a>

```typescript
public readonly defaultLogStorageAccountIdInput: string;
```

- *Type:* string

---

##### `defaultRecoveryDiskTypeInput`<sup>Optional</sup> <a name="defaultRecoveryDiskTypeInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskTypeInput"></a>

```typescript
public readonly defaultRecoveryDiskTypeInput: string;
```

- *Type:* string

---

##### `defaultTargetDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="defaultTargetDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetIdInput"></a>

```typescript
public readonly defaultTargetDiskEncryptionSetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `managedDiskInput`<sup>Optional</sup> <a name="managedDiskInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDiskInput"></a>

```typescript
public readonly managedDiskInput: IResolvable | SiteRecoveryVmwareReplicatedVmManagedDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>[]

---

##### `multiVmGroupNameInput`<sup>Optional</sup> <a name="multiVmGroupNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupNameInput"></a>

```typescript
public readonly multiVmGroupNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | SiteRecoveryVmwareReplicatedVmNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>[]

---

##### `physicalServerCredentialNameInput`<sup>Optional</sup> <a name="physicalServerCredentialNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialNameInput"></a>

```typescript
public readonly physicalServerCredentialNameInput: string;
```

- *Type:* string

---

##### `recoveryReplicationPolicyIdInput`<sup>Optional</sup> <a name="recoveryReplicationPolicyIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyIdInput"></a>

```typescript
public readonly recoveryReplicationPolicyIdInput: string;
```

- *Type:* string

---

##### `recoveryVaultIdInput`<sup>Optional</sup> <a name="recoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultIdInput"></a>

```typescript
public readonly recoveryVaultIdInput: string;
```

- *Type:* string

---

##### `sourceVmNameInput`<sup>Optional</sup> <a name="sourceVmNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmNameInput"></a>

```typescript
public readonly sourceVmNameInput: string;
```

- *Type:* string

---

##### `targetAvailabilitySetIdInput`<sup>Optional</sup> <a name="targetAvailabilitySetIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetIdInput"></a>

```typescript
public readonly targetAvailabilitySetIdInput: string;
```

- *Type:* string

---

##### `targetBootDiagnosticsStorageAccountIdInput`<sup>Optional</sup> <a name="targetBootDiagnosticsStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountIdInput"></a>

```typescript
public readonly targetBootDiagnosticsStorageAccountIdInput: string;
```

- *Type:* string

---

##### `targetNetworkIdInput`<sup>Optional</sup> <a name="targetNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkIdInput"></a>

```typescript
public readonly targetNetworkIdInput: string;
```

- *Type:* string

---

##### `targetProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="targetProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupIdInput"></a>

```typescript
public readonly targetProximityPlacementGroupIdInput: string;
```

- *Type:* string

---

##### `targetResourceGroupIdInput`<sup>Optional</sup> <a name="targetResourceGroupIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupIdInput"></a>

```typescript
public readonly targetResourceGroupIdInput: string;
```

- *Type:* string

---

##### `targetVmNameInput`<sup>Optional</sup> <a name="targetVmNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmNameInput"></a>

```typescript
public readonly targetVmNameInput: string;
```

- *Type:* string

---

##### `targetVmSizeInput`<sup>Optional</sup> <a name="targetVmSizeInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSizeInput"></a>

```typescript
public readonly targetVmSizeInput: string;
```

- *Type:* string

---

##### `targetZoneInput`<sup>Optional</sup> <a name="targetZoneInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZoneInput"></a>

```typescript
public readonly targetZoneInput: string;
```

- *Type:* string

---

##### `testNetworkIdInput`<sup>Optional</sup> <a name="testNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkIdInput"></a>

```typescript
public readonly testNetworkIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SiteRecoveryVmwareReplicatedVmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>

---

##### `applianceName`<sup>Required</sup> <a name="applianceName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceName"></a>

```typescript
public readonly applianceName: string;
```

- *Type:* string

---

##### `defaultLogStorageAccountId`<sup>Required</sup> <a name="defaultLogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountId"></a>

```typescript
public readonly defaultLogStorageAccountId: string;
```

- *Type:* string

---

##### `defaultRecoveryDiskType`<sup>Required</sup> <a name="defaultRecoveryDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskType"></a>

```typescript
public readonly defaultRecoveryDiskType: string;
```

- *Type:* string

---

##### `defaultTargetDiskEncryptionSetId`<sup>Required</sup> <a name="defaultTargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetId"></a>

```typescript
public readonly defaultTargetDiskEncryptionSetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `multiVmGroupName`<sup>Required</sup> <a name="multiVmGroupName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupName"></a>

```typescript
public readonly multiVmGroupName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `physicalServerCredentialName`<sup>Required</sup> <a name="physicalServerCredentialName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialName"></a>

```typescript
public readonly physicalServerCredentialName: string;
```

- *Type:* string

---

##### `recoveryReplicationPolicyId`<sup>Required</sup> <a name="recoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyId"></a>

```typescript
public readonly recoveryReplicationPolicyId: string;
```

- *Type:* string

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultId"></a>

```typescript
public readonly recoveryVaultId: string;
```

- *Type:* string

---

##### `sourceVmName`<sup>Required</sup> <a name="sourceVmName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmName"></a>

```typescript
public readonly sourceVmName: string;
```

- *Type:* string

---

##### `targetAvailabilitySetId`<sup>Required</sup> <a name="targetAvailabilitySetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetId"></a>

```typescript
public readonly targetAvailabilitySetId: string;
```

- *Type:* string

---

##### `targetBootDiagnosticsStorageAccountId`<sup>Required</sup> <a name="targetBootDiagnosticsStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountId"></a>

```typescript
public readonly targetBootDiagnosticsStorageAccountId: string;
```

- *Type:* string

---

##### `targetNetworkId`<sup>Required</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkId"></a>

```typescript
public readonly targetNetworkId: string;
```

- *Type:* string

---

##### `targetProximityPlacementGroupId`<sup>Required</sup> <a name="targetProximityPlacementGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupId"></a>

```typescript
public readonly targetProximityPlacementGroupId: string;
```

- *Type:* string

---

##### `targetResourceGroupId`<sup>Required</sup> <a name="targetResourceGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupId"></a>

```typescript
public readonly targetResourceGroupId: string;
```

- *Type:* string

---

##### `targetVmName`<sup>Required</sup> <a name="targetVmName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmName"></a>

```typescript
public readonly targetVmName: string;
```

- *Type:* string

---

##### `targetVmSize`<sup>Required</sup> <a name="targetVmSize" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSize"></a>

```typescript
public readonly targetVmSize: string;
```

- *Type:* string

---

##### `targetZone`<sup>Required</sup> <a name="targetZone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZone"></a>

```typescript
public readonly targetZone: string;
```

- *Type:* string

---

##### `testNetworkId`<sup>Required</sup> <a name="testNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkId"></a>

```typescript
public readonly testNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryVmwareReplicatedVmConfig <a name="SiteRecoveryVmwareReplicatedVmConfig" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

const siteRecoveryVmwareReplicatedVmConfig: siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.applianceName">applianceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#appliance_name SiteRecoveryVmwareReplicatedVm#appliance_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#name SiteRecoveryVmwareReplicatedVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.physicalServerCredentialName">physicalServerCredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#physical_server_credential_name SiteRecoveryVmwareReplicatedVm#physical_server_credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryReplicationPolicyId">recoveryReplicationPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_replication_policy_id SiteRecoveryVmwareReplicatedVm#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryVaultId">recoveryVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_vault_id SiteRecoveryVmwareReplicatedVm#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.sourceVmName">sourceVmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#source_vm_name SiteRecoveryVmwareReplicatedVm#source_vm_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetResourceGroupId">targetResourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_resource_group_id SiteRecoveryVmwareReplicatedVm#target_resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmName">targetVmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_name SiteRecoveryVmwareReplicatedVm#target_vm_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultLogStorageAccountId">defaultLogStorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#default_log_storage_account_id SiteRecoveryVmwareReplicatedVm#default_log_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultRecoveryDiskType">defaultRecoveryDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#default_recovery_disk_type SiteRecoveryVmwareReplicatedVm#default_recovery_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultTargetDiskEncryptionSetId">defaultTargetDiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#default_target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#default_target_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#id SiteRecoveryVmwareReplicatedVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#license_type SiteRecoveryVmwareReplicatedVm#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.managedDisk">managedDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>[]</code> | managed_disk block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.multiVmGroupName">multiVmGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#multi_vm_group_name SiteRecoveryVmwareReplicatedVm#multi_vm_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetAvailabilitySetId">targetAvailabilitySetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_availability_set_id SiteRecoveryVmwareReplicatedVm#target_availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetBootDiagnosticsStorageAccountId">targetBootDiagnosticsStorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_boot_diagnostics_storage_account_id SiteRecoveryVmwareReplicatedVm#target_boot_diagnostics_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetNetworkId">targetNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_network_id SiteRecoveryVmwareReplicatedVm#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetProximityPlacementGroupId">targetProximityPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_proximity_placement_group_id SiteRecoveryVmwareReplicatedVm#target_proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmSize">targetVmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_size SiteRecoveryVmwareReplicatedVm#target_vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetZone">targetZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_zone SiteRecoveryVmwareReplicatedVm#target_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.testNetworkId">testNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#test_network_id SiteRecoveryVmwareReplicatedVm#test_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applianceName`<sup>Required</sup> <a name="applianceName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.applianceName"></a>

```typescript
public readonly applianceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#appliance_name SiteRecoveryVmwareReplicatedVm#appliance_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#name SiteRecoveryVmwareReplicatedVm#name}.

---

##### `physicalServerCredentialName`<sup>Required</sup> <a name="physicalServerCredentialName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.physicalServerCredentialName"></a>

```typescript
public readonly physicalServerCredentialName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#physical_server_credential_name SiteRecoveryVmwareReplicatedVm#physical_server_credential_name}.

---

##### `recoveryReplicationPolicyId`<sup>Required</sup> <a name="recoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryReplicationPolicyId"></a>

```typescript
public readonly recoveryReplicationPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_replication_policy_id SiteRecoveryVmwareReplicatedVm#recovery_replication_policy_id}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryVaultId"></a>

```typescript
public readonly recoveryVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_vault_id SiteRecoveryVmwareReplicatedVm#recovery_vault_id}.

---

##### `sourceVmName`<sup>Required</sup> <a name="sourceVmName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.sourceVmName"></a>

```typescript
public readonly sourceVmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#source_vm_name SiteRecoveryVmwareReplicatedVm#source_vm_name}.

---

##### `targetResourceGroupId`<sup>Required</sup> <a name="targetResourceGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetResourceGroupId"></a>

```typescript
public readonly targetResourceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_resource_group_id SiteRecoveryVmwareReplicatedVm#target_resource_group_id}.

---

##### `targetVmName`<sup>Required</sup> <a name="targetVmName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmName"></a>

```typescript
public readonly targetVmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_name SiteRecoveryVmwareReplicatedVm#target_vm_name}.

---

##### `defaultLogStorageAccountId`<sup>Optional</sup> <a name="defaultLogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultLogStorageAccountId"></a>

```typescript
public readonly defaultLogStorageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#default_log_storage_account_id SiteRecoveryVmwareReplicatedVm#default_log_storage_account_id}.

---

##### `defaultRecoveryDiskType`<sup>Optional</sup> <a name="defaultRecoveryDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultRecoveryDiskType"></a>

```typescript
public readonly defaultRecoveryDiskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#default_recovery_disk_type SiteRecoveryVmwareReplicatedVm#default_recovery_disk_type}.

---

##### `defaultTargetDiskEncryptionSetId`<sup>Optional</sup> <a name="defaultTargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultTargetDiskEncryptionSetId"></a>

```typescript
public readonly defaultTargetDiskEncryptionSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#default_target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#default_target_disk_encryption_set_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#id SiteRecoveryVmwareReplicatedVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#license_type SiteRecoveryVmwareReplicatedVm#license_type}.

---

##### `managedDisk`<sup>Optional</sup> <a name="managedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.managedDisk"></a>

```typescript
public readonly managedDisk: IResolvable | SiteRecoveryVmwareReplicatedVmManagedDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>[]

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#managed_disk SiteRecoveryVmwareReplicatedVm#managed_disk}

---

##### `multiVmGroupName`<sup>Optional</sup> <a name="multiVmGroupName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.multiVmGroupName"></a>

```typescript
public readonly multiVmGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#multi_vm_group_name SiteRecoveryVmwareReplicatedVm#multi_vm_group_name}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | SiteRecoveryVmwareReplicatedVmNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#network_interface SiteRecoveryVmwareReplicatedVm#network_interface}

---

##### `targetAvailabilitySetId`<sup>Optional</sup> <a name="targetAvailabilitySetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetAvailabilitySetId"></a>

```typescript
public readonly targetAvailabilitySetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_availability_set_id SiteRecoveryVmwareReplicatedVm#target_availability_set_id}.

---

##### `targetBootDiagnosticsStorageAccountId`<sup>Optional</sup> <a name="targetBootDiagnosticsStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetBootDiagnosticsStorageAccountId"></a>

```typescript
public readonly targetBootDiagnosticsStorageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_boot_diagnostics_storage_account_id SiteRecoveryVmwareReplicatedVm#target_boot_diagnostics_storage_account_id}.

---

##### `targetNetworkId`<sup>Optional</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetNetworkId"></a>

```typescript
public readonly targetNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_network_id SiteRecoveryVmwareReplicatedVm#target_network_id}.

---

##### `targetProximityPlacementGroupId`<sup>Optional</sup> <a name="targetProximityPlacementGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetProximityPlacementGroupId"></a>

```typescript
public readonly targetProximityPlacementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_proximity_placement_group_id SiteRecoveryVmwareReplicatedVm#target_proximity_placement_group_id}.

---

##### `targetVmSize`<sup>Optional</sup> <a name="targetVmSize" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmSize"></a>

```typescript
public readonly targetVmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_size SiteRecoveryVmwareReplicatedVm#target_vm_size}.

---

##### `targetZone`<sup>Optional</sup> <a name="targetZone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetZone"></a>

```typescript
public readonly targetZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_zone SiteRecoveryVmwareReplicatedVm#target_zone}.

---

##### `testNetworkId`<sup>Optional</sup> <a name="testNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.testNetworkId"></a>

```typescript
public readonly testNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#test_network_id SiteRecoveryVmwareReplicatedVm#test_network_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryVmwareReplicatedVmTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#timeouts SiteRecoveryVmwareReplicatedVm#timeouts}

---

### SiteRecoveryVmwareReplicatedVmManagedDisk <a name="SiteRecoveryVmwareReplicatedVmManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

const siteRecoveryVmwareReplicatedVmManagedDisk: siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.diskId">diskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#disk_id SiteRecoveryVmwareReplicatedVm#disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskType">targetDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_type SiteRecoveryVmwareReplicatedVm#target_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.logStorageAccountId">logStorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#log_storage_account_id SiteRecoveryVmwareReplicatedVm#log_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskEncryptionSetId">targetDiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#target_disk_encryption_set_id}. |

---

##### `diskId`<sup>Required</sup> <a name="diskId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.diskId"></a>

```typescript
public readonly diskId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#disk_id SiteRecoveryVmwareReplicatedVm#disk_id}.

---

##### `targetDiskType`<sup>Required</sup> <a name="targetDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskType"></a>

```typescript
public readonly targetDiskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_type SiteRecoveryVmwareReplicatedVm#target_disk_type}.

---

##### `logStorageAccountId`<sup>Optional</sup> <a name="logStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.logStorageAccountId"></a>

```typescript
public readonly logStorageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#log_storage_account_id SiteRecoveryVmwareReplicatedVm#log_storage_account_id}.

---

##### `targetDiskEncryptionSetId`<sup>Optional</sup> <a name="targetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskEncryptionSetId"></a>

```typescript
public readonly targetDiskEncryptionSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#target_disk_encryption_set_id}.

---

### SiteRecoveryVmwareReplicatedVmNetworkInterface <a name="SiteRecoveryVmwareReplicatedVmNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

const siteRecoveryVmwareReplicatedVmNetworkInterface: siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.isPrimary">isPrimary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#is_primary SiteRecoveryVmwareReplicatedVm#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.sourceMacAddress">sourceMacAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#source_mac_address SiteRecoveryVmwareReplicatedVm#source_mac_address}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetStaticIp">targetStaticIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_static_ip SiteRecoveryVmwareReplicatedVm#target_static_ip}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetSubnetName">targetSubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_subnet_name SiteRecoveryVmwareReplicatedVm#target_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.testSubnetName">testSubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#test_subnet_name SiteRecoveryVmwareReplicatedVm#test_subnet_name}. |

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.isPrimary"></a>

```typescript
public readonly isPrimary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#is_primary SiteRecoveryVmwareReplicatedVm#is_primary}.

---

##### `sourceMacAddress`<sup>Required</sup> <a name="sourceMacAddress" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.sourceMacAddress"></a>

```typescript
public readonly sourceMacAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#source_mac_address SiteRecoveryVmwareReplicatedVm#source_mac_address}.

---

##### `targetStaticIp`<sup>Optional</sup> <a name="targetStaticIp" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetStaticIp"></a>

```typescript
public readonly targetStaticIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_static_ip SiteRecoveryVmwareReplicatedVm#target_static_ip}.

---

##### `targetSubnetName`<sup>Optional</sup> <a name="targetSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetSubnetName"></a>

```typescript
public readonly targetSubnetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#target_subnet_name SiteRecoveryVmwareReplicatedVm#target_subnet_name}.

---

##### `testSubnetName`<sup>Optional</sup> <a name="testSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.testSubnetName"></a>

```typescript
public readonly testSubnetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#test_subnet_name SiteRecoveryVmwareReplicatedVm#test_subnet_name}.

---

### SiteRecoveryVmwareReplicatedVmTimeouts <a name="SiteRecoveryVmwareReplicatedVmTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

const siteRecoveryVmwareReplicatedVmTimeouts: siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#create SiteRecoveryVmwareReplicatedVm#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#delete SiteRecoveryVmwareReplicatedVm#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#read SiteRecoveryVmwareReplicatedVm#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#update SiteRecoveryVmwareReplicatedVm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#create SiteRecoveryVmwareReplicatedVm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#delete SiteRecoveryVmwareReplicatedVm#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#read SiteRecoveryVmwareReplicatedVm#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/site_recovery_vmware_replicated_vm#update SiteRecoveryVmwareReplicatedVm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryVmwareReplicatedVmManagedDiskList <a name="SiteRecoveryVmwareReplicatedVmManagedDiskList" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

new siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.get"></a>

```typescript
public get(index: number): SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SiteRecoveryVmwareReplicatedVmManagedDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>[]

---


### SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference <a name="SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

new siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetLogStorageAccountId">resetLogStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryptionSetId">resetTargetDiskEncryptionSetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogStorageAccountId` <a name="resetLogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetLogStorageAccountId"></a>

```typescript
public resetLogStorageAccountId(): void
```

##### `resetTargetDiskEncryptionSetId` <a name="resetTargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryptionSetId"></a>

```typescript
public resetTargetDiskEncryptionSetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskIdInput">diskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountIdInput">logStorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetIdInput">targetDiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskTypeInput">targetDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskId">diskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountId">logStorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetId">targetDiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskType">targetDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIdInput`<sup>Optional</sup> <a name="diskIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskIdInput"></a>

```typescript
public readonly diskIdInput: string;
```

- *Type:* string

---

##### `logStorageAccountIdInput`<sup>Optional</sup> <a name="logStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountIdInput"></a>

```typescript
public readonly logStorageAccountIdInput: string;
```

- *Type:* string

---

##### `targetDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="targetDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetIdInput"></a>

```typescript
public readonly targetDiskEncryptionSetIdInput: string;
```

- *Type:* string

---

##### `targetDiskTypeInput`<sup>Optional</sup> <a name="targetDiskTypeInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskTypeInput"></a>

```typescript
public readonly targetDiskTypeInput: string;
```

- *Type:* string

---

##### `diskId`<sup>Required</sup> <a name="diskId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskId"></a>

```typescript
public readonly diskId: string;
```

- *Type:* string

---

##### `logStorageAccountId`<sup>Required</sup> <a name="logStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountId"></a>

```typescript
public readonly logStorageAccountId: string;
```

- *Type:* string

---

##### `targetDiskEncryptionSetId`<sup>Required</sup> <a name="targetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetId"></a>

```typescript
public readonly targetDiskEncryptionSetId: string;
```

- *Type:* string

---

##### `targetDiskType`<sup>Required</sup> <a name="targetDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskType"></a>

```typescript
public readonly targetDiskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SiteRecoveryVmwareReplicatedVmManagedDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>

---


### SiteRecoveryVmwareReplicatedVmNetworkInterfaceList <a name="SiteRecoveryVmwareReplicatedVmNetworkInterfaceList" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

new siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.get"></a>

```typescript
public get(index: number): SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SiteRecoveryVmwareReplicatedVmNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>[]

---


### SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference <a name="SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

new siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetStaticIp">resetTargetStaticIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetSubnetName">resetTargetSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTestSubnetName">resetTestSubnetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetStaticIp` <a name="resetTargetStaticIp" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetStaticIp"></a>

```typescript
public resetTargetStaticIp(): void
```

##### `resetTargetSubnetName` <a name="resetTargetSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetSubnetName"></a>

```typescript
public resetTargetSubnetName(): void
```

##### `resetTestSubnetName` <a name="resetTestSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTestSubnetName"></a>

```typescript
public resetTestSubnetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddressInput">sourceMacAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIpInput">targetStaticIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetNameInput">targetSubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetNameInput">testSubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimary">isPrimary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddress">sourceMacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIp">targetStaticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetName">targetSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetName">testSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```typescript
public readonly isPrimaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceMacAddressInput`<sup>Optional</sup> <a name="sourceMacAddressInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddressInput"></a>

```typescript
public readonly sourceMacAddressInput: string;
```

- *Type:* string

---

##### `targetStaticIpInput`<sup>Optional</sup> <a name="targetStaticIpInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIpInput"></a>

```typescript
public readonly targetStaticIpInput: string;
```

- *Type:* string

---

##### `targetSubnetNameInput`<sup>Optional</sup> <a name="targetSubnetNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetNameInput"></a>

```typescript
public readonly targetSubnetNameInput: string;
```

- *Type:* string

---

##### `testSubnetNameInput`<sup>Optional</sup> <a name="testSubnetNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetNameInput"></a>

```typescript
public readonly testSubnetNameInput: string;
```

- *Type:* string

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimary"></a>

```typescript
public readonly isPrimary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceMacAddress`<sup>Required</sup> <a name="sourceMacAddress" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddress"></a>

```typescript
public readonly sourceMacAddress: string;
```

- *Type:* string

---

##### `targetStaticIp`<sup>Required</sup> <a name="targetStaticIp" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIp"></a>

```typescript
public readonly targetStaticIp: string;
```

- *Type:* string

---

##### `targetSubnetName`<sup>Required</sup> <a name="targetSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetName"></a>

```typescript
public readonly targetSubnetName: string;
```

- *Type:* string

---

##### `testSubnetName`<sup>Required</sup> <a name="testSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetName"></a>

```typescript
public readonly testSubnetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SiteRecoveryVmwareReplicatedVmNetworkInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>

---


### SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference <a name="SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicatedVm } from '@cdktf/provider-azurerm'

new siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SiteRecoveryVmwareReplicatedVmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>

---



