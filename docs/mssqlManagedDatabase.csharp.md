# `mssqlManagedDatabase` Submodule <a name="`mssqlManagedDatabase` Submodule" id="@cdktf/provider-azurerm.mssqlManagedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedDatabase <a name="MssqlManagedDatabase" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database azurerm_mssql_managed_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedDatabase(Construct Scope, string Id, MssqlManagedDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig">MssqlManagedDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig">MssqlManagedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putLongTermRetentionPolicy">PutLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putPointInTimeRestore">PutPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetLongTermRetentionPolicy">ResetLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetPointInTimeRestore">ResetPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetShortTermRetentionDays">ResetShortTermRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLongTermRetentionPolicy` <a name="PutLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putLongTermRetentionPolicy"></a>

```csharp
private void PutLongTermRetentionPolicy(MssqlManagedDatabaseLongTermRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putLongTermRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

---

##### `PutPointInTimeRestore` <a name="PutPointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putPointInTimeRestore"></a>

```csharp
private void PutPointInTimeRestore(MssqlManagedDatabasePointInTimeRestore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putPointInTimeRestore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlManagedDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLongTermRetentionPolicy` <a name="ResetLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetLongTermRetentionPolicy"></a>

```csharp
private void ResetLongTermRetentionPolicy()
```

##### `ResetPointInTimeRestore` <a name="ResetPointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetPointInTimeRestore"></a>

```csharp
private void ResetPointInTimeRestore()
```

##### `ResetShortTermRetentionDays` <a name="ResetShortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetShortTermRetentionDays"></a>

```csharp
private void ResetShortTermRetentionDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MssqlManagedDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlManagedDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlManagedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicy">LongTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference">MssqlManagedDatabaseLongTermRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.pointInTimeRestore">PointInTimeRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference">MssqlManagedDatabasePointInTimeRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference">MssqlManagedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicyInput">LongTermRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.pointInTimeRestoreInput">PointInTimeRestoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDaysInput">ShortTermRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDays">ShortTermRetentionDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LongTermRetentionPolicy`<sup>Required</sup> <a name="LongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicy"></a>

```csharp
public MssqlManagedDatabaseLongTermRetentionPolicyOutputReference LongTermRetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference">MssqlManagedDatabaseLongTermRetentionPolicyOutputReference</a>

---

##### `PointInTimeRestore`<sup>Required</sup> <a name="PointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.pointInTimeRestore"></a>

```csharp
public MssqlManagedDatabasePointInTimeRestoreOutputReference PointInTimeRestore { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference">MssqlManagedDatabasePointInTimeRestoreOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeouts"></a>

```csharp
public MssqlManagedDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference">MssqlManagedDatabaseTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LongTermRetentionPolicyInput`<sup>Optional</sup> <a name="LongTermRetentionPolicyInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.longTermRetentionPolicyInput"></a>

```csharp
public MssqlManagedDatabaseLongTermRetentionPolicy LongTermRetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PointInTimeRestoreInput`<sup>Optional</sup> <a name="PointInTimeRestoreInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.pointInTimeRestoreInput"></a>

```csharp
public MssqlManagedDatabasePointInTimeRestore PointInTimeRestoreInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a>

---

##### `ShortTermRetentionDaysInput`<sup>Optional</sup> <a name="ShortTermRetentionDaysInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDaysInput"></a>

```csharp
public double ShortTermRetentionDaysInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ShortTermRetentionDays`<sup>Required</sup> <a name="ShortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.shortTermRetentionDays"></a>

```csharp
public double ShortTermRetentionDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedDatabaseConfig <a name="MssqlManagedDatabaseConfig" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    string Name,
    string Id = null,
    MssqlManagedDatabaseLongTermRetentionPolicy LongTermRetentionPolicy = null,
    MssqlManagedDatabasePointInTimeRestore PointInTimeRestore = null,
    double ShortTermRetentionDays = null,
    MssqlManagedDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#managed_instance_id MssqlManagedDatabase#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#name MssqlManagedDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#id MssqlManagedDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.longTermRetentionPolicy">LongTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | long_term_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.pointInTimeRestore">PointInTimeRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a></code> | point_in_time_restore block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.shortTermRetentionDays">ShortTermRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#short_term_retention_days MssqlManagedDatabase#short_term_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#managed_instance_id MssqlManagedDatabase#managed_instance_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#name MssqlManagedDatabase#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#id MssqlManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LongTermRetentionPolicy`<sup>Optional</sup> <a name="LongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.longTermRetentionPolicy"></a>

```csharp
public MssqlManagedDatabaseLongTermRetentionPolicy LongTermRetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

long_term_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#long_term_retention_policy MssqlManagedDatabase#long_term_retention_policy}

---

##### `PointInTimeRestore`<sup>Optional</sup> <a name="PointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.pointInTimeRestore"></a>

```csharp
public MssqlManagedDatabasePointInTimeRestore PointInTimeRestore { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a>

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#point_in_time_restore MssqlManagedDatabase#point_in_time_restore}

---

##### `ShortTermRetentionDays`<sup>Optional</sup> <a name="ShortTermRetentionDays" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.shortTermRetentionDays"></a>

```csharp
public double ShortTermRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#short_term_retention_days MssqlManagedDatabase#short_term_retention_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseConfig.property.timeouts"></a>

```csharp
public MssqlManagedDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts">MssqlManagedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#timeouts MssqlManagedDatabase#timeouts}

---

### MssqlManagedDatabaseLongTermRetentionPolicy <a name="MssqlManagedDatabaseLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedDatabaseLongTermRetentionPolicy {
    object ImmutableBackupsEnabled = null,
    string MonthlyRetention = null,
    string WeeklyRetention = null,
    double WeekOfYear = null,
    string YearlyRetention = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.immutableBackupsEnabled">ImmutableBackupsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#immutable_backups_enabled MssqlManagedDatabase#immutable_backups_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.monthlyRetention">MonthlyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#monthly_retention MssqlManagedDatabase#monthly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weeklyRetention">WeeklyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#weekly_retention MssqlManagedDatabase#weekly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weekOfYear">WeekOfYear</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#week_of_year MssqlManagedDatabase#week_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.yearlyRetention">YearlyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#yearly_retention MssqlManagedDatabase#yearly_retention}. |

---

##### `ImmutableBackupsEnabled`<sup>Optional</sup> <a name="ImmutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.immutableBackupsEnabled"></a>

```csharp
public object ImmutableBackupsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#immutable_backups_enabled MssqlManagedDatabase#immutable_backups_enabled}.

---

##### `MonthlyRetention`<sup>Optional</sup> <a name="MonthlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.monthlyRetention"></a>

```csharp
public string MonthlyRetention { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#monthly_retention MssqlManagedDatabase#monthly_retention}.

---

##### `WeeklyRetention`<sup>Optional</sup> <a name="WeeklyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weeklyRetention"></a>

```csharp
public string WeeklyRetention { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#weekly_retention MssqlManagedDatabase#weekly_retention}.

---

##### `WeekOfYear`<sup>Optional</sup> <a name="WeekOfYear" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.weekOfYear"></a>

```csharp
public double WeekOfYear { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#week_of_year MssqlManagedDatabase#week_of_year}.

---

##### `YearlyRetention`<sup>Optional</sup> <a name="YearlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy.property.yearlyRetention"></a>

```csharp
public string YearlyRetention { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#yearly_retention MssqlManagedDatabase#yearly_retention}.

---

### MssqlManagedDatabasePointInTimeRestore <a name="MssqlManagedDatabasePointInTimeRestore" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedDatabasePointInTimeRestore {
    string RestorePointInTime,
    string SourceDatabaseId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.property.restorePointInTime">RestorePointInTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#restore_point_in_time MssqlManagedDatabase#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.property.sourceDatabaseId">SourceDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#source_database_id MssqlManagedDatabase#source_database_id}. |

---

##### `RestorePointInTime`<sup>Required</sup> <a name="RestorePointInTime" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.property.restorePointInTime"></a>

```csharp
public string RestorePointInTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#restore_point_in_time MssqlManagedDatabase#restore_point_in_time}.

---

##### `SourceDatabaseId`<sup>Required</sup> <a name="SourceDatabaseId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore.property.sourceDatabaseId"></a>

```csharp
public string SourceDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#source_database_id MssqlManagedDatabase#source_database_id}.

---

### MssqlManagedDatabaseTimeouts <a name="MssqlManagedDatabaseTimeouts" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#create MssqlManagedDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#delete MssqlManagedDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#read MssqlManagedDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#update MssqlManagedDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#create MssqlManagedDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#delete MssqlManagedDatabase#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#read MssqlManagedDatabase#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/mssql_managed_database#update MssqlManagedDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedDatabaseLongTermRetentionPolicyOutputReference <a name="MssqlManagedDatabaseLongTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedDatabaseLongTermRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetImmutableBackupsEnabled">ResetImmutableBackupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention">ResetMonthlyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention">ResetWeeklyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear">ResetWeekOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention">ResetYearlyRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImmutableBackupsEnabled` <a name="ResetImmutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetImmutableBackupsEnabled"></a>

```csharp
private void ResetImmutableBackupsEnabled()
```

##### `ResetMonthlyRetention` <a name="ResetMonthlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention"></a>

```csharp
private void ResetMonthlyRetention()
```

##### `ResetWeeklyRetention` <a name="ResetWeeklyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention"></a>

```csharp
private void ResetWeeklyRetention()
```

##### `ResetWeekOfYear` <a name="ResetWeekOfYear" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear"></a>

```csharp
private void ResetWeekOfYear()
```

##### `ResetYearlyRetention` <a name="ResetYearlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention"></a>

```csharp
private void ResetYearlyRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabledInput">ImmutableBackupsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput">MonthlyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput">WeeklyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput">WeekOfYearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput">YearlyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled">ImmutableBackupsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention">MonthlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention">WeeklyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear">WeekOfYear</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention">YearlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmutableBackupsEnabledInput`<sup>Optional</sup> <a name="ImmutableBackupsEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabledInput"></a>

```csharp
public object ImmutableBackupsEnabledInput { get; }
```

- *Type:* object

---

##### `MonthlyRetentionInput`<sup>Optional</sup> <a name="MonthlyRetentionInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput"></a>

```csharp
public string MonthlyRetentionInput { get; }
```

- *Type:* string

---

##### `WeeklyRetentionInput`<sup>Optional</sup> <a name="WeeklyRetentionInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput"></a>

```csharp
public string WeeklyRetentionInput { get; }
```

- *Type:* string

---

##### `WeekOfYearInput`<sup>Optional</sup> <a name="WeekOfYearInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput"></a>

```csharp
public double WeekOfYearInput { get; }
```

- *Type:* double

---

##### `YearlyRetentionInput`<sup>Optional</sup> <a name="YearlyRetentionInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput"></a>

```csharp
public string YearlyRetentionInput { get; }
```

- *Type:* string

---

##### `ImmutableBackupsEnabled`<sup>Required</sup> <a name="ImmutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled"></a>

```csharp
public object ImmutableBackupsEnabled { get; }
```

- *Type:* object

---

##### `MonthlyRetention`<sup>Required</sup> <a name="MonthlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention"></a>

```csharp
public string MonthlyRetention { get; }
```

- *Type:* string

---

##### `WeeklyRetention`<sup>Required</sup> <a name="WeeklyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention"></a>

```csharp
public string WeeklyRetention { get; }
```

- *Type:* string

---

##### `WeekOfYear`<sup>Required</sup> <a name="WeekOfYear" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear"></a>

```csharp
public double WeekOfYear { get; }
```

- *Type:* double

---

##### `YearlyRetention`<sup>Required</sup> <a name="YearlyRetention" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention"></a>

```csharp
public string YearlyRetention { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public MssqlManagedDatabaseLongTermRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseLongTermRetentionPolicy">MssqlManagedDatabaseLongTermRetentionPolicy</a>

---


### MssqlManagedDatabasePointInTimeRestoreOutputReference <a name="MssqlManagedDatabasePointInTimeRestoreOutputReference" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedDatabasePointInTimeRestoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTimeInput">RestorePointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseIdInput">SourceDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime">RestorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId">SourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestorePointInTimeInput`<sup>Optional</sup> <a name="RestorePointInTimeInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTimeInput"></a>

```csharp
public string RestorePointInTimeInput { get; }
```

- *Type:* string

---

##### `SourceDatabaseIdInput`<sup>Optional</sup> <a name="SourceDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseIdInput"></a>

```csharp
public string SourceDatabaseIdInput { get; }
```

- *Type:* string

---

##### `RestorePointInTime`<sup>Required</sup> <a name="RestorePointInTime" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime"></a>

```csharp
public string RestorePointInTime { get; }
```

- *Type:* string

---

##### `SourceDatabaseId`<sup>Required</sup> <a name="SourceDatabaseId" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId"></a>

```csharp
public string SourceDatabaseId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue"></a>

```csharp
public MssqlManagedDatabasePointInTimeRestore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabasePointInTimeRestore">MssqlManagedDatabasePointInTimeRestore</a>

---


### MssqlManagedDatabaseTimeoutsOutputReference <a name="MssqlManagedDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedDatabase.MssqlManagedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



