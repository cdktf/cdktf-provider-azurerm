# `backupPolicyVmWorkload` Submodule <a name="`backupPolicyVmWorkload` Submodule" id="@cdktf/provider-azurerm.backupPolicyVmWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyVmWorkload <a name="BackupPolicyVmWorkload" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload azurerm_backup_policy_vm_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkload(Construct Scope, string Id, BackupPolicyVmWorkloadConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig">BackupPolicyVmWorkloadConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig">BackupPolicyVmWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy">PutProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProtectionPolicy` <a name="PutProtectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy"></a>

```csharp
private void PutProtectionPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy.parameter.value"></a>

- *Type:* object

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings"></a>

```csharp
private void PutSettings(BackupPolicyVmWorkloadSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts"></a>

```csharp
private void PutTimeouts(BackupPolicyVmWorkloadTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupPolicyVmWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyVmWorkload.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyVmWorkload.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyVmWorkload.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyVmWorkload.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BackupPolicyVmWorkload resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupPolicyVmWorkload to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupPolicyVmWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BackupPolicyVmWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicy">ProtectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList">BackupPolicyVmWorkloadProtectionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference">BackupPolicyVmWorkloadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference">BackupPolicyVmWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicyInput">ProtectionPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultNameInput">RecoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ProtectionPolicy`<sup>Required</sup> <a name="ProtectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicy"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyList ProtectionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList">BackupPolicyVmWorkloadProtectionPolicyList</a>

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settings"></a>

```csharp
public BackupPolicyVmWorkloadSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference">BackupPolicyVmWorkloadSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeouts"></a>

```csharp
public BackupPolicyVmWorkloadTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference">BackupPolicyVmWorkloadTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectionPolicyInput`<sup>Optional</sup> <a name="ProtectionPolicyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicyInput"></a>

```csharp
public object ProtectionPolicyInput { get; }
```

- *Type:* object

---

##### `RecoveryVaultNameInput`<sup>Optional</sup> <a name="RecoveryVaultNameInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultNameInput"></a>

```csharp
public string RecoveryVaultNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settingsInput"></a>

```csharp
public BackupPolicyVmWorkloadSettings SettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadTypeInput"></a>

```csharp
public string WorkloadTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyVmWorkloadConfig <a name="BackupPolicyVmWorkloadConfig" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object ProtectionPolicy,
    string RecoveryVaultName,
    string ResourceGroupName,
    BackupPolicyVmWorkloadSettings Settings,
    string WorkloadType,
    string Id = null,
    BackupPolicyVmWorkloadTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.protectionPolicy">ProtectionPolicy</a></code> | <code>object</code> | protection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.workloadType">WorkloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}.

---

##### `ProtectionPolicy`<sup>Required</sup> <a name="ProtectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.protectionPolicy"></a>

```csharp
public object ProtectionPolicy { get; set; }
```

- *Type:* object

protection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#protection_policy BackupPolicyVmWorkload#protection_policy}

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}.

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.settings"></a>

```csharp
public BackupPolicyVmWorkloadSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#settings BackupPolicyVmWorkload#settings}

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.workloadType"></a>

```csharp
public string WorkloadType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.timeouts"></a>

```csharp
public BackupPolicyVmWorkloadTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#timeouts BackupPolicyVmWorkload#timeouts}

---

### BackupPolicyVmWorkloadProtectionPolicy <a name="BackupPolicyVmWorkloadProtectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicy {
    BackupPolicyVmWorkloadProtectionPolicyBackup Backup,
    string PolicyType,
    BackupPolicyVmWorkloadProtectionPolicyRetentionDaily RetentionDaily = null,
    BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly RetentionMonthly = null,
    BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly RetentionWeekly = null,
    BackupPolicyVmWorkloadProtectionPolicyRetentionYearly RetentionYearly = null,
    BackupPolicyVmWorkloadProtectionPolicySimpleRetention SimpleRetention = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#policy_type BackupPolicyVmWorkload#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionDaily">RetentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionMonthly">RetentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionWeekly">RetentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionYearly">RetentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.simpleRetention">SimpleRetention</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | simple_retention block. |

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.backup"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyBackup Backup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#backup BackupPolicyVmWorkload#backup}

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#policy_type BackupPolicyVmWorkload#policy_type}.

---

##### `RetentionDaily`<sup>Optional</sup> <a name="RetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionDaily"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionDaily RetentionDaily { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#retention_daily BackupPolicyVmWorkload#retention_daily}

---

##### `RetentionMonthly`<sup>Optional</sup> <a name="RetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionMonthly"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly RetentionMonthly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#retention_monthly BackupPolicyVmWorkload#retention_monthly}

---

##### `RetentionWeekly`<sup>Optional</sup> <a name="RetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionWeekly"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly RetentionWeekly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#retention_weekly BackupPolicyVmWorkload#retention_weekly}

---

##### `RetentionYearly`<sup>Optional</sup> <a name="RetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionYearly"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionYearly RetentionYearly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#retention_yearly BackupPolicyVmWorkload#retention_yearly}

---

##### `SimpleRetention`<sup>Optional</sup> <a name="SimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.simpleRetention"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicySimpleRetention SimpleRetention { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

simple_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#simple_retention BackupPolicyVmWorkload#simple_retention}

---

### BackupPolicyVmWorkloadProtectionPolicyBackup <a name="BackupPolicyVmWorkloadProtectionPolicyBackup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyBackup {
    string Frequency = null,
    double FrequencyInMinutes = null,
    string Time = null,
    string[] Weekdays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequencyInMinutes">FrequencyInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}.

---

##### `FrequencyInMinutes`<sup>Optional</sup> <a name="FrequencyInMinutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequencyInMinutes"></a>

```csharp
public double FrequencyInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}.

---

##### `Time`<sup>Optional</sup> <a name="Time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionDaily <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyRetentionDaily {
    double Count
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly {
    double Count,
    string FormatType,
    double[] Monthdays = null,
    string[] Weekdays = null,
    string[] Weeks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.formatType">FormatType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.monthdays">Monthdays</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weeks">Weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.formatType"></a>

```csharp
public string FormatType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

##### `Monthdays`<sup>Optional</sup> <a name="Monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.monthdays"></a>

```csharp
public double[] Monthdays { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `Weeks`<sup>Optional</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weeks"></a>

```csharp
public string[] Weeks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly {
    double Count,
    string[] Weekdays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionYearly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyRetentionYearly {
    double Count,
    string FormatType,
    string[] Months,
    double[] Monthdays = null,
    string[] Weekdays = null,
    string[] Weeks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.formatType">FormatType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.months">Months</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.monthdays">Monthdays</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weeks">Weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.formatType"></a>

```csharp
public string FormatType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.months"></a>

```csharp
public string[] Months { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}.

---

##### `Monthdays`<sup>Optional</sup> <a name="Monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.monthdays"></a>

```csharp
public double[] Monthdays { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `Weeks`<sup>Optional</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weeks"></a>

```csharp
public string[] Weeks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

### BackupPolicyVmWorkloadProtectionPolicySimpleRetention <a name="BackupPolicyVmWorkloadProtectionPolicySimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicySimpleRetention {
    double Count
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

### BackupPolicyVmWorkloadSettings <a name="BackupPolicyVmWorkloadSettings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadSettings {
    string TimeZone,
    object CompressionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.compressionEnabled">CompressionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}. |

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}.

---

##### `CompressionEnabled`<sup>Optional</sup> <a name="CompressionEnabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.compressionEnabled"></a>

```csharp
public object CompressionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}.

---

### BackupPolicyVmWorkloadTimeouts <a name="BackupPolicyVmWorkloadTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequencyInMinutes">ResetFrequencyInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetTime">ResetTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetFrequencyInMinutes` <a name="ResetFrequencyInMinutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequencyInMinutes"></a>

```csharp
private void ResetFrequencyInMinutes()
```

##### `ResetTime` <a name="ResetTime" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetTime"></a>

```csharp
private void ResetTime()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetWeekdays"></a>

```csharp
private void ResetWeekdays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutesInput">FrequencyInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutes">FrequencyInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInMinutesInput`<sup>Optional</sup> <a name="FrequencyInMinutesInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutesInput"></a>

```csharp
public double FrequencyInMinutesInput { get; }
```

- *Type:* double

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `FrequencyInMinutes`<sup>Required</sup> <a name="FrequencyInMinutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutes"></a>

```csharp
public double FrequencyInMinutes { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---


### BackupPolicyVmWorkloadProtectionPolicyList <a name="BackupPolicyVmWorkloadProtectionPolicyList" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get"></a>

```csharp
private BackupPolicyVmWorkloadProtectionPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupPolicyVmWorkloadProtectionPolicyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup">PutBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily">PutRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly">PutRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly">PutRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly">PutRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention">PutSimpleRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionDaily">ResetRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionMonthly">ResetRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionWeekly">ResetRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionYearly">ResetRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetSimpleRetention">ResetSimpleRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackup` <a name="PutBackup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup"></a>

```csharp
private void PutBackup(BackupPolicyVmWorkloadProtectionPolicyBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---

##### `PutRetentionDaily` <a name="PutRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily"></a>

```csharp
private void PutRetentionDaily(BackupPolicyVmWorkloadProtectionPolicyRetentionDaily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---

##### `PutRetentionMonthly` <a name="PutRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly"></a>

```csharp
private void PutRetentionMonthly(BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---

##### `PutRetentionWeekly` <a name="PutRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly"></a>

```csharp
private void PutRetentionWeekly(BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---

##### `PutRetentionYearly` <a name="PutRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly"></a>

```csharp
private void PutRetentionYearly(BackupPolicyVmWorkloadProtectionPolicyRetentionYearly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---

##### `PutSimpleRetention` <a name="PutSimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention"></a>

```csharp
private void PutSimpleRetention(BackupPolicyVmWorkloadProtectionPolicySimpleRetention Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---

##### `ResetRetentionDaily` <a name="ResetRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionDaily"></a>

```csharp
private void ResetRetentionDaily()
```

##### `ResetRetentionMonthly` <a name="ResetRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionMonthly"></a>

```csharp
private void ResetRetentionMonthly()
```

##### `ResetRetentionWeekly` <a name="ResetRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionWeekly"></a>

```csharp
private void ResetRetentionWeekly()
```

##### `ResetRetentionYearly` <a name="ResetRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionYearly"></a>

```csharp
private void ResetRetentionYearly()
```

##### `ResetSimpleRetention` <a name="ResetSimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetSimpleRetention"></a>

```csharp
private void ResetSimpleRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference">BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDaily">RetentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthly">RetentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeekly">RetentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearly">RetentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetention">SimpleRetention</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference">BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backupInput">BackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDailyInput">RetentionDailyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthlyInput">RetentionMonthlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeeklyInput">RetentionWeeklyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearlyInput">RetentionYearlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetentionInput">SimpleRetentionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backup"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference Backup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference">BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference</a>

---

##### `RetentionDaily`<sup>Required</sup> <a name="RetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDaily"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference RetentionDaily { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference</a>

---

##### `RetentionMonthly`<sup>Required</sup> <a name="RetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthly"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference RetentionMonthly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference</a>

---

##### `RetentionWeekly`<sup>Required</sup> <a name="RetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeekly"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference RetentionWeekly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference</a>

---

##### `RetentionYearly`<sup>Required</sup> <a name="RetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearly"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference RetentionYearly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference</a>

---

##### `SimpleRetention`<sup>Required</sup> <a name="SimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetention"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference SimpleRetention { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference">BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference</a>

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backupInput"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyBackup BackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `RetentionDailyInput`<sup>Optional</sup> <a name="RetentionDailyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDailyInput"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionDaily RetentionDailyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---

##### `RetentionMonthlyInput`<sup>Optional</sup> <a name="RetentionMonthlyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthlyInput"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly RetentionMonthlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---

##### `RetentionWeeklyInput`<sup>Optional</sup> <a name="RetentionWeeklyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeeklyInput"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly RetentionWeeklyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---

##### `RetentionYearlyInput`<sup>Optional</sup> <a name="RetentionYearlyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearlyInput"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionYearly RetentionYearlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---

##### `SimpleRetentionInput`<sup>Optional</sup> <a name="SimpleRetentionInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetentionInput"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicySimpleRetention SimpleRetentionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetMonthdays">ResetMonthdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeeks">ResetWeeks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMonthdays` <a name="ResetMonthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetMonthdays"></a>

```csharp
private void ResetMonthdays()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeekdays"></a>

```csharp
private void ResetWeekdays()
```

##### `ResetWeeks` <a name="ResetWeeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeeks"></a>

```csharp
private void ResetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatTypeInput">FormatTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdaysInput">MonthdaysInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeksInput">WeeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatType">FormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdays">Monthdays</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeks">Weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `FormatTypeInput`<sup>Optional</sup> <a name="FormatTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatTypeInput"></a>

```csharp
public string FormatTypeInput { get; }
```

- *Type:* string

---

##### `MonthdaysInput`<sup>Optional</sup> <a name="MonthdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdaysInput"></a>

```csharp
public double[] MonthdaysInput { get; }
```

- *Type:* double[]

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `WeeksInput`<sup>Optional</sup> <a name="WeeksInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeksInput"></a>

```csharp
public string[] WeeksInput { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatType"></a>

```csharp
public string FormatType { get; }
```

- *Type:* string

---

##### `Monthdays`<sup>Required</sup> <a name="Monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdays"></a>

```csharp
public double[] Monthdays { get; }
```

- *Type:* double[]

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `Weeks`<sup>Required</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeks"></a>

```csharp
public string[] Weeks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetMonthdays">ResetMonthdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeeks">ResetWeeks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMonthdays` <a name="ResetMonthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetMonthdays"></a>

```csharp
private void ResetMonthdays()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeekdays"></a>

```csharp
private void ResetWeekdays()
```

##### `ResetWeeks` <a name="ResetWeeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeeks"></a>

```csharp
private void ResetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatTypeInput">FormatTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdaysInput">MonthdaysInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthsInput">MonthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeksInput">WeeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatType">FormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdays">Monthdays</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.months">Months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeks">Weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `FormatTypeInput`<sup>Optional</sup> <a name="FormatTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatTypeInput"></a>

```csharp
public string FormatTypeInput { get; }
```

- *Type:* string

---

##### `MonthdaysInput`<sup>Optional</sup> <a name="MonthdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdaysInput"></a>

```csharp
public double[] MonthdaysInput { get; }
```

- *Type:* double[]

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthsInput"></a>

```csharp
public string[] MonthsInput { get; }
```

- *Type:* string[]

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `WeeksInput`<sup>Optional</sup> <a name="WeeksInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeksInput"></a>

```csharp
public string[] WeeksInput { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatType"></a>

```csharp
public string FormatType { get; }
```

- *Type:* string

---

##### `Monthdays`<sup>Required</sup> <a name="Monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdays"></a>

```csharp
public double[] Monthdays { get; }
```

- *Type:* double[]

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.months"></a>

```csharp
public string[] Months { get; }
```

- *Type:* string[]

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `Weeks`<sup>Required</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeks"></a>

```csharp
public string[] Weeks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicyRetentionYearly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---


### BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmWorkloadProtectionPolicySimpleRetention InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---


### BackupPolicyVmWorkloadSettingsOutputReference <a name="BackupPolicyVmWorkloadSettingsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resetCompressionEnabled">ResetCompressionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompressionEnabled` <a name="ResetCompressionEnabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resetCompressionEnabled"></a>

```csharp
private void ResetCompressionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabledInput">CompressionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabled">CompressionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompressionEnabledInput`<sup>Optional</sup> <a name="CompressionEnabledInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabledInput"></a>

```csharp
public object CompressionEnabledInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `CompressionEnabled`<sup>Required</sup> <a name="CompressionEnabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabled"></a>

```csharp
public object CompressionEnabled { get; }
```

- *Type:* object

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyVmWorkloadSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---


### BackupPolicyVmWorkloadTimeoutsOutputReference <a name="BackupPolicyVmWorkloadTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyVmWorkloadTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



