# `backupPolicyVm` Submodule <a name="`backupPolicyVm` Submodule" id="@cdktf/provider-azurerm.backupPolicyVm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyVm <a name="BackupPolicyVm" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm azurerm_backup_policy_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVm(Construct Scope, string Id, BackupPolicyVmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig">BackupPolicyVmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig">BackupPolicyVmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup">PutBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup">PutInstantRestoreResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionDaily">PutRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly">PutRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly">PutRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly">PutRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreResourceGroup">ResetInstantRestoreResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreRetentionDays">ResetInstantRestoreRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionDaily">ResetRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionMonthly">ResetRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionWeekly">ResetRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionYearly">ResetRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackup` <a name="PutBackup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup"></a>

```csharp
private void PutBackup(BackupPolicyVmBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

---

##### `PutInstantRestoreResourceGroup` <a name="PutInstantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup"></a>

```csharp
private void PutInstantRestoreResourceGroup(BackupPolicyVmInstantRestoreResourceGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

---

##### `PutRetentionDaily` <a name="PutRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionDaily"></a>

```csharp
private void PutRetentionDaily(BackupPolicyVmRetentionDaily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

---

##### `PutRetentionMonthly` <a name="PutRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly"></a>

```csharp
private void PutRetentionMonthly(BackupPolicyVmRetentionMonthly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

---

##### `PutRetentionWeekly` <a name="PutRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly"></a>

```csharp
private void PutRetentionWeekly(BackupPolicyVmRetentionWeekly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

---

##### `PutRetentionYearly` <a name="PutRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly"></a>

```csharp
private void PutRetentionYearly(BackupPolicyVmRetentionYearly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts"></a>

```csharp
private void PutTimeouts(BackupPolicyVmTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstantRestoreResourceGroup` <a name="ResetInstantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreResourceGroup"></a>

```csharp
private void ResetInstantRestoreResourceGroup()
```

##### `ResetInstantRestoreRetentionDays` <a name="ResetInstantRestoreRetentionDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreRetentionDays"></a>

```csharp
private void ResetInstantRestoreRetentionDays()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```

##### `ResetRetentionDaily` <a name="ResetRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionDaily"></a>

```csharp
private void ResetRetentionDaily()
```

##### `ResetRetentionMonthly` <a name="ResetRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionMonthly"></a>

```csharp
private void ResetRetentionMonthly()
```

##### `ResetRetentionWeekly` <a name="ResetRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionWeekly"></a>

```csharp
private void ResetRetentionWeekly()
```

##### `ResetRetentionYearly` <a name="ResetRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionYearly"></a>

```csharp
private void ResetRetentionYearly()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupPolicyVm resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyVm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyVm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyVm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyVm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BackupPolicyVm resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupPolicyVm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupPolicyVm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BackupPolicyVm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference">BackupPolicyVmBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroup">InstantRestoreResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference">BackupPolicyVmInstantRestoreResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDaily">RetentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference">BackupPolicyVmRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthly">RetentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference">BackupPolicyVmRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeekly">RetentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference">BackupPolicyVmRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearly">RetentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference">BackupPolicyVmRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference">BackupPolicyVmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backupInput">BackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroupInput">InstantRestoreResourceGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDaysInput">InstantRestoreRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultNameInput">RecoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDailyInput">RetentionDailyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthlyInput">RetentionMonthlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeeklyInput">RetentionWeeklyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearlyInput">RetentionYearlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDays">InstantRestoreRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backup"></a>

```csharp
public BackupPolicyVmBackupOutputReference Backup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference">BackupPolicyVmBackupOutputReference</a>

---

##### `InstantRestoreResourceGroup`<sup>Required</sup> <a name="InstantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroup"></a>

```csharp
public BackupPolicyVmInstantRestoreResourceGroupOutputReference InstantRestoreResourceGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference">BackupPolicyVmInstantRestoreResourceGroupOutputReference</a>

---

##### `RetentionDaily`<sup>Required</sup> <a name="RetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDaily"></a>

```csharp
public BackupPolicyVmRetentionDailyOutputReference RetentionDaily { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference">BackupPolicyVmRetentionDailyOutputReference</a>

---

##### `RetentionMonthly`<sup>Required</sup> <a name="RetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthly"></a>

```csharp
public BackupPolicyVmRetentionMonthlyOutputReference RetentionMonthly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference">BackupPolicyVmRetentionMonthlyOutputReference</a>

---

##### `RetentionWeekly`<sup>Required</sup> <a name="RetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeekly"></a>

```csharp
public BackupPolicyVmRetentionWeeklyOutputReference RetentionWeekly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference">BackupPolicyVmRetentionWeeklyOutputReference</a>

---

##### `RetentionYearly`<sup>Required</sup> <a name="RetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearly"></a>

```csharp
public BackupPolicyVmRetentionYearlyOutputReference RetentionYearly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference">BackupPolicyVmRetentionYearlyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeouts"></a>

```csharp
public BackupPolicyVmTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference">BackupPolicyVmTimeoutsOutputReference</a>

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backupInput"></a>

```csharp
public BackupPolicyVmBackup BackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstantRestoreResourceGroupInput`<sup>Optional</sup> <a name="InstantRestoreResourceGroupInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroupInput"></a>

```csharp
public BackupPolicyVmInstantRestoreResourceGroup InstantRestoreResourceGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

---

##### `InstantRestoreRetentionDaysInput`<sup>Optional</sup> <a name="InstantRestoreRetentionDaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDaysInput"></a>

```csharp
public double InstantRestoreRetentionDaysInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `RecoveryVaultNameInput`<sup>Optional</sup> <a name="RecoveryVaultNameInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultNameInput"></a>

```csharp
public string RecoveryVaultNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetentionDailyInput`<sup>Optional</sup> <a name="RetentionDailyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDailyInput"></a>

```csharp
public BackupPolicyVmRetentionDaily RetentionDailyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

---

##### `RetentionMonthlyInput`<sup>Optional</sup> <a name="RetentionMonthlyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthlyInput"></a>

```csharp
public BackupPolicyVmRetentionMonthly RetentionMonthlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

---

##### `RetentionWeeklyInput`<sup>Optional</sup> <a name="RetentionWeeklyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeeklyInput"></a>

```csharp
public BackupPolicyVmRetentionWeekly RetentionWeeklyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

---

##### `RetentionYearlyInput`<sup>Optional</sup> <a name="RetentionYearlyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearlyInput"></a>

```csharp
public BackupPolicyVmRetentionYearly RetentionYearlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstantRestoreRetentionDays`<sup>Required</sup> <a name="InstantRestoreRetentionDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDays"></a>

```csharp
public double InstantRestoreRetentionDays { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyVmBackup <a name="BackupPolicyVmBackup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmBackup {
    string Frequency,
    string Time,
    double HourDuration = null,
    double HourInterval = null,
    string[] Weekdays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#frequency BackupPolicyVm#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#time BackupPolicyVm#time}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourDuration">HourDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#hour_duration BackupPolicyVm#hour_duration}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourInterval">HourInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#hour_interval BackupPolicyVm#hour_interval}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#frequency BackupPolicyVm#frequency}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#time BackupPolicyVm#time}.

---

##### `HourDuration`<sup>Optional</sup> <a name="HourDuration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourDuration"></a>

```csharp
public double HourDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#hour_duration BackupPolicyVm#hour_duration}.

---

##### `HourInterval`<sup>Optional</sup> <a name="HourInterval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourInterval"></a>

```csharp
public double HourInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#hour_interval BackupPolicyVm#hour_interval}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

### BackupPolicyVmConfig <a name="BackupPolicyVmConfig" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    BackupPolicyVmBackup Backup,
    string Name,
    string RecoveryVaultName,
    string ResourceGroupName,
    string Id = null,
    BackupPolicyVmInstantRestoreResourceGroup InstantRestoreResourceGroup = null,
    double InstantRestoreRetentionDays = null,
    string PolicyType = null,
    BackupPolicyVmRetentionDaily RetentionDaily = null,
    BackupPolicyVmRetentionMonthly RetentionMonthly = null,
    BackupPolicyVmRetentionWeekly RetentionWeekly = null,
    BackupPolicyVmRetentionYearly RetentionYearly = null,
    BackupPolicyVmTimeouts Timeouts = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#name BackupPolicyVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#recovery_vault_name BackupPolicyVm#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#resource_group_name BackupPolicyVm#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#id BackupPolicyVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreResourceGroup">InstantRestoreResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | instant_restore_resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreRetentionDays">InstantRestoreRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#policy_type BackupPolicyVm#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionDaily">RetentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionMonthly">RetentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionWeekly">RetentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionYearly">RetentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#timezone BackupPolicyVm#timezone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.backup"></a>

```csharp
public BackupPolicyVmBackup Backup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#backup BackupPolicyVm#backup}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#name BackupPolicyVm#name}.

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#recovery_vault_name BackupPolicyVm#recovery_vault_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#resource_group_name BackupPolicyVm#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#id BackupPolicyVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstantRestoreResourceGroup`<sup>Optional</sup> <a name="InstantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreResourceGroup"></a>

```csharp
public BackupPolicyVmInstantRestoreResourceGroup InstantRestoreResourceGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

instant_restore_resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#instant_restore_resource_group BackupPolicyVm#instant_restore_resource_group}

---

##### `InstantRestoreRetentionDays`<sup>Optional</sup> <a name="InstantRestoreRetentionDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreRetentionDays"></a>

```csharp
public double InstantRestoreRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}.

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#policy_type BackupPolicyVm#policy_type}.

---

##### `RetentionDaily`<sup>Optional</sup> <a name="RetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionDaily"></a>

```csharp
public BackupPolicyVmRetentionDaily RetentionDaily { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#retention_daily BackupPolicyVm#retention_daily}

---

##### `RetentionMonthly`<sup>Optional</sup> <a name="RetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionMonthly"></a>

```csharp
public BackupPolicyVmRetentionMonthly RetentionMonthly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#retention_monthly BackupPolicyVm#retention_monthly}

---

##### `RetentionWeekly`<sup>Optional</sup> <a name="RetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionWeekly"></a>

```csharp
public BackupPolicyVmRetentionWeekly RetentionWeekly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#retention_weekly BackupPolicyVm#retention_weekly}

---

##### `RetentionYearly`<sup>Optional</sup> <a name="RetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionYearly"></a>

```csharp
public BackupPolicyVmRetentionYearly RetentionYearly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#retention_yearly BackupPolicyVm#retention_yearly}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timeouts"></a>

```csharp
public BackupPolicyVmTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#timeouts BackupPolicyVm#timeouts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#timezone BackupPolicyVm#timezone}.

---

### BackupPolicyVmInstantRestoreResourceGroup <a name="BackupPolicyVmInstantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmInstantRestoreResourceGroup {
    string Prefix,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#prefix BackupPolicyVm#prefix}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#suffix BackupPolicyVm#suffix}. |

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#prefix BackupPolicyVm#prefix}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#suffix BackupPolicyVm#suffix}.

---

### BackupPolicyVmRetentionDaily <a name="BackupPolicyVmRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmRetentionDaily {
    double Count
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

### BackupPolicyVmRetentionMonthly <a name="BackupPolicyVmRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmRetentionMonthly {
    double Count,
    double[] Days = null,
    object IncludeLastDays = null,
    string[] Weekdays = null,
    string[] Weeks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.days">Days</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.includeLastDays">IncludeLastDays</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weeks">Weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.days"></a>

```csharp
public double[] Days { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}.

---

##### `IncludeLastDays`<sup>Optional</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.includeLastDays"></a>

```csharp
public object IncludeLastDays { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

##### `Weeks`<sup>Optional</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weeks"></a>

```csharp
public string[] Weeks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}.

---

### BackupPolicyVmRetentionWeekly <a name="BackupPolicyVmRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmRetentionWeekly {
    double Count,
    string[] Weekdays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

### BackupPolicyVmRetentionYearly <a name="BackupPolicyVmRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmRetentionYearly {
    double Count,
    string[] Months,
    double[] Days = null,
    object IncludeLastDays = null,
    string[] Weekdays = null,
    string[] Weeks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.months">Months</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#months BackupPolicyVm#months}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.days">Days</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.includeLastDays">IncludeLastDays</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weeks">Weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.months"></a>

```csharp
public string[] Months { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#months BackupPolicyVm#months}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.days"></a>

```csharp
public double[] Days { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}.

---

##### `IncludeLastDays`<sup>Optional</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.includeLastDays"></a>

```csharp
public object IncludeLastDays { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

##### `Weeks`<sup>Optional</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weeks"></a>

```csharp
public string[] Weeks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}.

---

### BackupPolicyVmTimeouts <a name="BackupPolicyVmTimeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#create BackupPolicyVm#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#delete BackupPolicyVm#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#read BackupPolicyVm#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#update BackupPolicyVm#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#create BackupPolicyVm#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#delete BackupPolicyVm#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#read BackupPolicyVm#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_vm#update BackupPolicyVm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyVmBackupOutputReference <a name="BackupPolicyVmBackupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourDuration">ResetHourDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourInterval">ResetHourInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHourDuration` <a name="ResetHourDuration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourDuration"></a>

```csharp
private void ResetHourDuration()
```

##### `ResetHourInterval` <a name="ResetHourInterval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourInterval"></a>

```csharp
private void ResetHourInterval()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetWeekdays"></a>

```csharp
private void ResetWeekdays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDurationInput">HourDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourIntervalInput">HourIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDuration">HourDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourInterval">HourInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `HourDurationInput`<sup>Optional</sup> <a name="HourDurationInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDurationInput"></a>

```csharp
public double HourDurationInput { get; }
```

- *Type:* double

---

##### `HourIntervalInput`<sup>Optional</sup> <a name="HourIntervalInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourIntervalInput"></a>

```csharp
public double HourIntervalInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `HourDuration`<sup>Required</sup> <a name="HourDuration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDuration"></a>

```csharp
public double HourDuration { get; }
```

- *Type:* double

---

##### `HourInterval`<sup>Required</sup> <a name="HourInterval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourInterval"></a>

```csharp
public double HourInterval { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

---


### BackupPolicyVmInstantRestoreResourceGroupOutputReference <a name="BackupPolicyVmInstantRestoreResourceGroupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmInstantRestoreResourceGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmInstantRestoreResourceGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

---


### BackupPolicyVmRetentionDailyOutputReference <a name="BackupPolicyVmRetentionDailyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmRetentionDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmRetentionDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

---


### BackupPolicyVmRetentionMonthlyOutputReference <a name="BackupPolicyVmRetentionMonthlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmRetentionMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetIncludeLastDays">ResetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeeks">ResetWeeks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetIncludeLastDays` <a name="ResetIncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetIncludeLastDays"></a>

```csharp
private void ResetIncludeLastDays()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeekdays"></a>

```csharp
private void ResetWeekdays()
```

##### `ResetWeeks` <a name="ResetWeeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeeks"></a>

```csharp
private void ResetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.daysInput">DaysInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDaysInput">IncludeLastDaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeksInput">WeeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.days">Days</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDays">IncludeLastDays</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeks">Weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.daysInput"></a>

```csharp
public double[] DaysInput { get; }
```

- *Type:* double[]

---

##### `IncludeLastDaysInput`<sup>Optional</sup> <a name="IncludeLastDaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDaysInput"></a>

```csharp
public object IncludeLastDaysInput { get; }
```

- *Type:* object

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `WeeksInput`<sup>Optional</sup> <a name="WeeksInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeksInput"></a>

```csharp
public string[] WeeksInput { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.days"></a>

```csharp
public double[] Days { get; }
```

- *Type:* double[]

---

##### `IncludeLastDays`<sup>Required</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDays"></a>

```csharp
public object IncludeLastDays { get; }
```

- *Type:* object

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `Weeks`<sup>Required</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeks"></a>

```csharp
public string[] Weeks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmRetentionMonthly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

---


### BackupPolicyVmRetentionWeeklyOutputReference <a name="BackupPolicyVmRetentionWeeklyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmRetentionWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmRetentionWeekly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

---


### BackupPolicyVmRetentionYearlyOutputReference <a name="BackupPolicyVmRetentionYearlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmRetentionYearlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetIncludeLastDays">ResetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeeks">ResetWeeks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetIncludeLastDays` <a name="ResetIncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetIncludeLastDays"></a>

```csharp
private void ResetIncludeLastDays()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeekdays"></a>

```csharp
private void ResetWeekdays()
```

##### `ResetWeeks` <a name="ResetWeeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeeks"></a>

```csharp
private void ResetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.daysInput">DaysInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDaysInput">IncludeLastDaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.monthsInput">MonthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeksInput">WeeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.days">Days</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDays">IncludeLastDays</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.months">Months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeks">Weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.daysInput"></a>

```csharp
public double[] DaysInput { get; }
```

- *Type:* double[]

---

##### `IncludeLastDaysInput`<sup>Optional</sup> <a name="IncludeLastDaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDaysInput"></a>

```csharp
public object IncludeLastDaysInput { get; }
```

- *Type:* object

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.monthsInput"></a>

```csharp
public string[] MonthsInput { get; }
```

- *Type:* string[]

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `WeeksInput`<sup>Optional</sup> <a name="WeeksInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeksInput"></a>

```csharp
public string[] WeeksInput { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.days"></a>

```csharp
public double[] Days { get; }
```

- *Type:* double[]

---

##### `IncludeLastDays`<sup>Required</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDays"></a>

```csharp
public object IncludeLastDays { get; }
```

- *Type:* object

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.months"></a>

```csharp
public string[] Months { get; }
```

- *Type:* string[]

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `Weeks`<sup>Required</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeks"></a>

```csharp
public string[] Weeks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmRetentionYearly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

---


### BackupPolicyVmTimeoutsOutputReference <a name="BackupPolicyVmTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



