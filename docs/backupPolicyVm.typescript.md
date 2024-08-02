# `backupPolicyVm` Submodule <a name="`backupPolicyVm` Submodule" id="@cdktf/provider-azurerm.backupPolicyVm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyVm <a name="BackupPolicyVm" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm azurerm_backup_policy_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVm(scope: Construct, id: string, config: BackupPolicyVmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig">BackupPolicyVmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig">BackupPolicyVmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup">putInstantRestoreResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionDaily">putRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly">putRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly">putRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly">putRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTieringPolicy">putTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreResourceGroup">resetInstantRestoreResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreRetentionDays">resetInstantRestoreRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionDaily">resetRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionMonthly">resetRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionWeekly">resetRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionYearly">resetRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTieringPolicy">resetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup"></a>

```typescript
public putBackup(value: BackupPolicyVmBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

---

##### `putInstantRestoreResourceGroup` <a name="putInstantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup"></a>

```typescript
public putInstantRestoreResourceGroup(value: BackupPolicyVmInstantRestoreResourceGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

---

##### `putRetentionDaily` <a name="putRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionDaily"></a>

```typescript
public putRetentionDaily(value: BackupPolicyVmRetentionDaily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

---

##### `putRetentionMonthly` <a name="putRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly"></a>

```typescript
public putRetentionMonthly(value: BackupPolicyVmRetentionMonthly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

---

##### `putRetentionWeekly` <a name="putRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly"></a>

```typescript
public putRetentionWeekly(value: BackupPolicyVmRetentionWeekly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

---

##### `putRetentionYearly` <a name="putRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly"></a>

```typescript
public putRetentionYearly(value: BackupPolicyVmRetentionYearly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

---

##### `putTieringPolicy` <a name="putTieringPolicy" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTieringPolicy"></a>

```typescript
public putTieringPolicy(value: BackupPolicyVmTieringPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy">BackupPolicyVmTieringPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts"></a>

```typescript
public putTimeouts(value: BackupPolicyVmTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstantRestoreResourceGroup` <a name="resetInstantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreResourceGroup"></a>

```typescript
public resetInstantRestoreResourceGroup(): void
```

##### `resetInstantRestoreRetentionDays` <a name="resetInstantRestoreRetentionDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreRetentionDays"></a>

```typescript
public resetInstantRestoreRetentionDays(): void
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetPolicyType"></a>

```typescript
public resetPolicyType(): void
```

##### `resetRetentionDaily` <a name="resetRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionDaily"></a>

```typescript
public resetRetentionDaily(): void
```

##### `resetRetentionMonthly` <a name="resetRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionMonthly"></a>

```typescript
public resetRetentionMonthly(): void
```

##### `resetRetentionWeekly` <a name="resetRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionWeekly"></a>

```typescript
public resetRetentionWeekly(): void
```

##### `resetRetentionYearly` <a name="resetRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionYearly"></a>

```typescript
public resetRetentionYearly(): void
```

##### `resetTieringPolicy` <a name="resetTieringPolicy" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTieringPolicy"></a>

```typescript
public resetTieringPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupPolicyVm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isConstruct"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

backupPolicyVm.BackupPolicyVm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformElement"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

backupPolicyVm.BackupPolicyVm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformResource"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

backupPolicyVm.BackupPolicyVm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

backupPolicyVm.BackupPolicyVm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BackupPolicyVm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupPolicyVm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupPolicyVm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupPolicyVm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference">BackupPolicyVmBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroup">instantRestoreResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference">BackupPolicyVmInstantRestoreResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDaily">retentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference">BackupPolicyVmRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthly">retentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference">BackupPolicyVmRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeekly">retentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference">BackupPolicyVmRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearly">retentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference">BackupPolicyVmRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference">BackupPolicyVmTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference">BackupPolicyVmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroupInput">instantRestoreResourceGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDaysInput">instantRestoreRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDailyInput">retentionDailyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthlyInput">retentionMonthlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeeklyInput">retentionWeeklyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearlyInput">retentionYearlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tieringPolicyInput">tieringPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy">BackupPolicyVmTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDays">instantRestoreRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backup"></a>

```typescript
public readonly backup: BackupPolicyVmBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference">BackupPolicyVmBackupOutputReference</a>

---

##### `instantRestoreResourceGroup`<sup>Required</sup> <a name="instantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroup"></a>

```typescript
public readonly instantRestoreResourceGroup: BackupPolicyVmInstantRestoreResourceGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference">BackupPolicyVmInstantRestoreResourceGroupOutputReference</a>

---

##### `retentionDaily`<sup>Required</sup> <a name="retentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDaily"></a>

```typescript
public readonly retentionDaily: BackupPolicyVmRetentionDailyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference">BackupPolicyVmRetentionDailyOutputReference</a>

---

##### `retentionMonthly`<sup>Required</sup> <a name="retentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthly"></a>

```typescript
public readonly retentionMonthly: BackupPolicyVmRetentionMonthlyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference">BackupPolicyVmRetentionMonthlyOutputReference</a>

---

##### `retentionWeekly`<sup>Required</sup> <a name="retentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeekly"></a>

```typescript
public readonly retentionWeekly: BackupPolicyVmRetentionWeeklyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference">BackupPolicyVmRetentionWeeklyOutputReference</a>

---

##### `retentionYearly`<sup>Required</sup> <a name="retentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearly"></a>

```typescript
public readonly retentionYearly: BackupPolicyVmRetentionYearlyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference">BackupPolicyVmRetentionYearlyOutputReference</a>

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: BackupPolicyVmTieringPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference">BackupPolicyVmTieringPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeouts"></a>

```typescript
public readonly timeouts: BackupPolicyVmTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference">BackupPolicyVmTimeoutsOutputReference</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backupInput"></a>

```typescript
public readonly backupInput: BackupPolicyVmBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instantRestoreResourceGroupInput`<sup>Optional</sup> <a name="instantRestoreResourceGroupInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroupInput"></a>

```typescript
public readonly instantRestoreResourceGroupInput: BackupPolicyVmInstantRestoreResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

---

##### `instantRestoreRetentionDaysInput`<sup>Optional</sup> <a name="instantRestoreRetentionDaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDaysInput"></a>

```typescript
public readonly instantRestoreRetentionDaysInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultNameInput"></a>

```typescript
public readonly recoveryVaultNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `retentionDailyInput`<sup>Optional</sup> <a name="retentionDailyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDailyInput"></a>

```typescript
public readonly retentionDailyInput: BackupPolicyVmRetentionDaily;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

---

##### `retentionMonthlyInput`<sup>Optional</sup> <a name="retentionMonthlyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthlyInput"></a>

```typescript
public readonly retentionMonthlyInput: BackupPolicyVmRetentionMonthly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

---

##### `retentionWeeklyInput`<sup>Optional</sup> <a name="retentionWeeklyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeeklyInput"></a>

```typescript
public readonly retentionWeeklyInput: BackupPolicyVmRetentionWeekly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

---

##### `retentionYearlyInput`<sup>Optional</sup> <a name="retentionYearlyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearlyInput"></a>

```typescript
public readonly retentionYearlyInput: BackupPolicyVmRetentionYearly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

---

##### `tieringPolicyInput`<sup>Optional</sup> <a name="tieringPolicyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tieringPolicyInput"></a>

```typescript
public readonly tieringPolicyInput: BackupPolicyVmTieringPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy">BackupPolicyVmTieringPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BackupPolicyVmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instantRestoreRetentionDays`<sup>Required</sup> <a name="instantRestoreRetentionDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDays"></a>

```typescript
public readonly instantRestoreRetentionDays: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyVmBackup <a name="BackupPolicyVmBackup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmBackup: backupPolicyVm.BackupPolicyVmBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#frequency BackupPolicyVm#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#time BackupPolicyVm#time}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourDuration">hourDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#hour_duration BackupPolicyVm#hour_duration}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourInterval">hourInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#hour_interval BackupPolicyVm#hour_interval}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#frequency BackupPolicyVm#frequency}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#time BackupPolicyVm#time}.

---

##### `hourDuration`<sup>Optional</sup> <a name="hourDuration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourDuration"></a>

```typescript
public readonly hourDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#hour_duration BackupPolicyVm#hour_duration}.

---

##### `hourInterval`<sup>Optional</sup> <a name="hourInterval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourInterval"></a>

```typescript
public readonly hourInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#hour_interval BackupPolicyVm#hour_interval}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

### BackupPolicyVmConfig <a name="BackupPolicyVmConfig" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmConfig: backupPolicyVm.BackupPolicyVmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#name BackupPolicyVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#recovery_vault_name BackupPolicyVm#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#resource_group_name BackupPolicyVm#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#id BackupPolicyVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreResourceGroup">instantRestoreResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | instant_restore_resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreRetentionDays">instantRestoreRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#policy_type BackupPolicyVm#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionDaily">retentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionMonthly">retentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionWeekly">retentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionYearly">retentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy">BackupPolicyVmTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#timezone BackupPolicyVm#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.backup"></a>

```typescript
public readonly backup: BackupPolicyVmBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#backup BackupPolicyVm#backup}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#name BackupPolicyVm#name}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#recovery_vault_name BackupPolicyVm#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#resource_group_name BackupPolicyVm#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#id BackupPolicyVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instantRestoreResourceGroup`<sup>Optional</sup> <a name="instantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreResourceGroup"></a>

```typescript
public readonly instantRestoreResourceGroup: BackupPolicyVmInstantRestoreResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

instant_restore_resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#instant_restore_resource_group BackupPolicyVm#instant_restore_resource_group}

---

##### `instantRestoreRetentionDays`<sup>Optional</sup> <a name="instantRestoreRetentionDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreRetentionDays"></a>

```typescript
public readonly instantRestoreRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}.

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#policy_type BackupPolicyVm#policy_type}.

---

##### `retentionDaily`<sup>Optional</sup> <a name="retentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionDaily"></a>

```typescript
public readonly retentionDaily: BackupPolicyVmRetentionDaily;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#retention_daily BackupPolicyVm#retention_daily}

---

##### `retentionMonthly`<sup>Optional</sup> <a name="retentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionMonthly"></a>

```typescript
public readonly retentionMonthly: BackupPolicyVmRetentionMonthly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#retention_monthly BackupPolicyVm#retention_monthly}

---

##### `retentionWeekly`<sup>Optional</sup> <a name="retentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionWeekly"></a>

```typescript
public readonly retentionWeekly: BackupPolicyVmRetentionWeekly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#retention_weekly BackupPolicyVm#retention_weekly}

---

##### `retentionYearly`<sup>Optional</sup> <a name="retentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionYearly"></a>

```typescript
public readonly retentionYearly: BackupPolicyVmRetentionYearly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#retention_yearly BackupPolicyVm#retention_yearly}

---

##### `tieringPolicy`<sup>Optional</sup> <a name="tieringPolicy" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: BackupPolicyVmTieringPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy">BackupPolicyVmTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#tiering_policy BackupPolicyVm#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BackupPolicyVmTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#timeouts BackupPolicyVm#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#timezone BackupPolicyVm#timezone}.

---

### BackupPolicyVmInstantRestoreResourceGroup <a name="BackupPolicyVmInstantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmInstantRestoreResourceGroup: backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#prefix BackupPolicyVm#prefix}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#suffix BackupPolicyVm#suffix}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#prefix BackupPolicyVm#prefix}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#suffix BackupPolicyVm#suffix}.

---

### BackupPolicyVmRetentionDaily <a name="BackupPolicyVmRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmRetentionDaily: backupPolicyVm.BackupPolicyVmRetentionDaily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

### BackupPolicyVmRetentionMonthly <a name="BackupPolicyVmRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmRetentionMonthly: backupPolicyVm.BackupPolicyVmRetentionMonthly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.days">days</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.includeLastDays">includeLastDays</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weeks">weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}.

---

##### `includeLastDays`<sup>Optional</sup> <a name="includeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.includeLastDays"></a>

```typescript
public readonly includeLastDays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}.

---

### BackupPolicyVmRetentionWeekly <a name="BackupPolicyVmRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmRetentionWeekly: backupPolicyVm.BackupPolicyVmRetentionWeekly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

### BackupPolicyVmRetentionYearly <a name="BackupPolicyVmRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmRetentionYearly: backupPolicyVm.BackupPolicyVmRetentionYearly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.months">months</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#months BackupPolicyVm#months}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.days">days</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.includeLastDays">includeLastDays</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weeks">weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#months BackupPolicyVm#months}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}.

---

##### `includeLastDays`<sup>Optional</sup> <a name="includeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.includeLastDays"></a>

```typescript
public readonly includeLastDays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}.

---

### BackupPolicyVmTieringPolicy <a name="BackupPolicyVmTieringPolicy" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmTieringPolicy: backupPolicyVm.BackupPolicyVmTieringPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy.property.archivedRestorePoint">archivedRestorePoint</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint">BackupPolicyVmTieringPolicyArchivedRestorePoint</a></code> | archived_restore_point block. |

---

##### `archivedRestorePoint`<sup>Required</sup> <a name="archivedRestorePoint" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy.property.archivedRestorePoint"></a>

```typescript
public readonly archivedRestorePoint: BackupPolicyVmTieringPolicyArchivedRestorePoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint">BackupPolicyVmTieringPolicyArchivedRestorePoint</a>

archived_restore_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#archived_restore_point BackupPolicyVm#archived_restore_point}

---

### BackupPolicyVmTieringPolicyArchivedRestorePoint <a name="BackupPolicyVmTieringPolicyArchivedRestorePoint" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmTieringPolicyArchivedRestorePoint: backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#mode BackupPolicyVm#mode}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#duration BackupPolicyVm#duration}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint.property.durationType">durationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#duration_type BackupPolicyVm#duration_type}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#mode BackupPolicyVm#mode}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#duration BackupPolicyVm#duration}.

---

##### `durationType`<sup>Optional</sup> <a name="durationType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint.property.durationType"></a>

```typescript
public readonly durationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#duration_type BackupPolicyVm#duration_type}.

---

### BackupPolicyVmTimeouts <a name="BackupPolicyVmTimeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

const backupPolicyVmTimeouts: backupPolicyVm.BackupPolicyVmTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#create BackupPolicyVm#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#delete BackupPolicyVm#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#read BackupPolicyVm#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#update BackupPolicyVm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#create BackupPolicyVm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#delete BackupPolicyVm#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#read BackupPolicyVm#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/backup_policy_vm#update BackupPolicyVm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyVmBackupOutputReference <a name="BackupPolicyVmBackupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVmBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourDuration">resetHourDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourInterval">resetHourInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHourDuration` <a name="resetHourDuration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourDuration"></a>

```typescript
public resetHourDuration(): void
```

##### `resetHourInterval` <a name="resetHourInterval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourInterval"></a>

```typescript
public resetHourInterval(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDurationInput">hourDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourIntervalInput">hourIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDuration">hourDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourInterval">hourInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `hourDurationInput`<sup>Optional</sup> <a name="hourDurationInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDurationInput"></a>

```typescript
public readonly hourDurationInput: number;
```

- *Type:* number

---

##### `hourIntervalInput`<sup>Optional</sup> <a name="hourIntervalInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourIntervalInput"></a>

```typescript
public readonly hourIntervalInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `hourDuration`<sup>Required</sup> <a name="hourDuration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDuration"></a>

```typescript
public readonly hourDuration: number;
```

- *Type:* number

---

##### `hourInterval`<sup>Required</sup> <a name="hourInterval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourInterval"></a>

```typescript
public readonly hourInterval: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

---


### BackupPolicyVmInstantRestoreResourceGroupOutputReference <a name="BackupPolicyVmInstantRestoreResourceGroupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmInstantRestoreResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

---


### BackupPolicyVmRetentionDailyOutputReference <a name="BackupPolicyVmRetentionDailyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmRetentionDaily;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

---


### BackupPolicyVmRetentionMonthlyOutputReference <a name="BackupPolicyVmRetentionMonthlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetIncludeLastDays">resetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeeks">resetWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetIncludeLastDays` <a name="resetIncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetIncludeLastDays"></a>

```typescript
public resetIncludeLastDays(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```

##### `resetWeeks` <a name="resetWeeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeeks"></a>

```typescript
public resetWeeks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.daysInput">daysInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDaysInput">includeLastDaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeksInput">weeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.days">days</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDays">includeLastDays</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeks">weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number[];
```

- *Type:* number[]

---

##### `includeLastDaysInput`<sup>Optional</sup> <a name="includeLastDaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDaysInput"></a>

```typescript
public readonly includeLastDaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `weeksInput`<sup>Optional</sup> <a name="weeksInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeksInput"></a>

```typescript
public readonly weeksInput: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

---

##### `includeLastDays`<sup>Required</sup> <a name="includeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDays"></a>

```typescript
public readonly includeLastDays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmRetentionMonthly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

---


### BackupPolicyVmRetentionWeeklyOutputReference <a name="BackupPolicyVmRetentionWeeklyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmRetentionWeekly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

---


### BackupPolicyVmRetentionYearlyOutputReference <a name="BackupPolicyVmRetentionYearlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetIncludeLastDays">resetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeeks">resetWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetIncludeLastDays` <a name="resetIncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetIncludeLastDays"></a>

```typescript
public resetIncludeLastDays(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```

##### `resetWeeks` <a name="resetWeeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeeks"></a>

```typescript
public resetWeeks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.daysInput">daysInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDaysInput">includeLastDaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.monthsInput">monthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeksInput">weeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.days">days</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDays">includeLastDays</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeks">weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number[];
```

- *Type:* number[]

---

##### `includeLastDaysInput`<sup>Optional</sup> <a name="includeLastDaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDaysInput"></a>

```typescript
public readonly includeLastDaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: string[];
```

- *Type:* string[]

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `weeksInput`<sup>Optional</sup> <a name="weeksInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeksInput"></a>

```typescript
public readonly weeksInput: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

---

##### `includeLastDays`<sup>Required</sup> <a name="includeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDays"></a>

```typescript
public readonly includeLastDays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmRetentionYearly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

---


### BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference <a name="BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.resetDurationType">resetDurationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetDurationType` <a name="resetDurationType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.resetDurationType"></a>

```typescript
public resetDurationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.durationTypeInput">durationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.durationType">durationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint">BackupPolicyVmTieringPolicyArchivedRestorePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `durationTypeInput`<sup>Optional</sup> <a name="durationTypeInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.durationTypeInput"></a>

```typescript
public readonly durationTypeInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `durationType`<sup>Required</sup> <a name="durationType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.durationType"></a>

```typescript
public readonly durationType: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmTieringPolicyArchivedRestorePoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint">BackupPolicyVmTieringPolicyArchivedRestorePoint</a>

---


### BackupPolicyVmTieringPolicyOutputReference <a name="BackupPolicyVmTieringPolicyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.putArchivedRestorePoint">putArchivedRestorePoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArchivedRestorePoint` <a name="putArchivedRestorePoint" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.putArchivedRestorePoint"></a>

```typescript
public putArchivedRestorePoint(value: BackupPolicyVmTieringPolicyArchivedRestorePoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.putArchivedRestorePoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint">BackupPolicyVmTieringPolicyArchivedRestorePoint</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.archivedRestorePoint">archivedRestorePoint</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference">BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.archivedRestorePointInput">archivedRestorePointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint">BackupPolicyVmTieringPolicyArchivedRestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy">BackupPolicyVmTieringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archivedRestorePoint`<sup>Required</sup> <a name="archivedRestorePoint" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.archivedRestorePoint"></a>

```typescript
public readonly archivedRestorePoint: BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference">BackupPolicyVmTieringPolicyArchivedRestorePointOutputReference</a>

---

##### `archivedRestorePointInput`<sup>Optional</sup> <a name="archivedRestorePointInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.archivedRestorePointInput"></a>

```typescript
public readonly archivedRestorePointInput: BackupPolicyVmTieringPolicyArchivedRestorePoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyArchivedRestorePoint">BackupPolicyVmTieringPolicyArchivedRestorePoint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmTieringPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTieringPolicy">BackupPolicyVmTieringPolicy</a>

---


### BackupPolicyVmTimeoutsOutputReference <a name="BackupPolicyVmTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer"></a>

```typescript
import { backupPolicyVm } from '@cdktf/provider-azurerm'

new backupPolicyVm.BackupPolicyVmTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupPolicyVmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>

---



