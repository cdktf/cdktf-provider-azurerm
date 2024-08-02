# `synapseSqlPoolWorkloadGroup` Submodule <a name="`synapseSqlPoolWorkloadGroup` Submodule" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPoolWorkloadGroup <a name="SynapseSqlPoolWorkloadGroup" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group azurerm_synapse_sql_pool_workload_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSqlPoolWorkloadGroup(Construct Scope, string Id, SynapseSqlPoolWorkloadGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig">SynapseSqlPoolWorkloadGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig">SynapseSqlPoolWorkloadGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetImportance">ResetImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetMaxResourcePercentPerRequest">ResetMaxResourcePercentPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetMinResourcePercentPerRequest">ResetMinResourcePercentPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetQueryExecutionTimeoutInSeconds">ResetQueryExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(SynapseSqlPoolWorkloadGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportance` <a name="ResetImportance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetImportance"></a>

```csharp
private void ResetImportance()
```

##### `ResetMaxResourcePercentPerRequest` <a name="ResetMaxResourcePercentPerRequest" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetMaxResourcePercentPerRequest"></a>

```csharp
private void ResetMaxResourcePercentPerRequest()
```

##### `ResetMinResourcePercentPerRequest` <a name="ResetMinResourcePercentPerRequest" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetMinResourcePercentPerRequest"></a>

```csharp
private void ResetMinResourcePercentPerRequest()
```

##### `ResetQueryExecutionTimeoutInSeconds` <a name="ResetQueryExecutionTimeoutInSeconds" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetQueryExecutionTimeoutInSeconds"></a>

```csharp
private void ResetQueryExecutionTimeoutInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseSqlPoolWorkloadGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSqlPoolWorkloadGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSqlPoolWorkloadGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSqlPoolWorkloadGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSqlPoolWorkloadGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SynapseSqlPoolWorkloadGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapseSqlPoolWorkloadGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapseSqlPoolWorkloadGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SynapseSqlPoolWorkloadGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference">SynapseSqlPoolWorkloadGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.importanceInput">ImportanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentInput">MaxResourcePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentPerRequestInput">MaxResourcePercentPerRequestInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentInput">MinResourcePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentPerRequestInput">MinResourcePercentPerRequestInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.queryExecutionTimeoutInSecondsInput">QueryExecutionTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.sqlPoolIdInput">SqlPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.importance">Importance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercent">MaxResourcePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentPerRequest">MaxResourcePercentPerRequest</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercent">MinResourcePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentPerRequest">MinResourcePercentPerRequest</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.queryExecutionTimeoutInSeconds">QueryExecutionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.sqlPoolId">SqlPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.timeouts"></a>

```csharp
public SynapseSqlPoolWorkloadGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference">SynapseSqlPoolWorkloadGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportanceInput`<sup>Optional</sup> <a name="ImportanceInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.importanceInput"></a>

```csharp
public string ImportanceInput { get; }
```

- *Type:* string

---

##### `MaxResourcePercentInput`<sup>Optional</sup> <a name="MaxResourcePercentInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentInput"></a>

```csharp
public double MaxResourcePercentInput { get; }
```

- *Type:* double

---

##### `MaxResourcePercentPerRequestInput`<sup>Optional</sup> <a name="MaxResourcePercentPerRequestInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentPerRequestInput"></a>

```csharp
public double MaxResourcePercentPerRequestInput { get; }
```

- *Type:* double

---

##### `MinResourcePercentInput`<sup>Optional</sup> <a name="MinResourcePercentInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentInput"></a>

```csharp
public double MinResourcePercentInput { get; }
```

- *Type:* double

---

##### `MinResourcePercentPerRequestInput`<sup>Optional</sup> <a name="MinResourcePercentPerRequestInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentPerRequestInput"></a>

```csharp
public double MinResourcePercentPerRequestInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="QueryExecutionTimeoutInSecondsInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.queryExecutionTimeoutInSecondsInput"></a>

```csharp
public double QueryExecutionTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `SqlPoolIdInput`<sup>Optional</sup> <a name="SqlPoolIdInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.sqlPoolIdInput"></a>

```csharp
public string SqlPoolIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Importance`<sup>Required</sup> <a name="Importance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.importance"></a>

```csharp
public string Importance { get; }
```

- *Type:* string

---

##### `MaxResourcePercent`<sup>Required</sup> <a name="MaxResourcePercent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercent"></a>

```csharp
public double MaxResourcePercent { get; }
```

- *Type:* double

---

##### `MaxResourcePercentPerRequest`<sup>Required</sup> <a name="MaxResourcePercentPerRequest" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentPerRequest"></a>

```csharp
public double MaxResourcePercentPerRequest { get; }
```

- *Type:* double

---

##### `MinResourcePercent`<sup>Required</sup> <a name="MinResourcePercent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercent"></a>

```csharp
public double MinResourcePercent { get; }
```

- *Type:* double

---

##### `MinResourcePercentPerRequest`<sup>Required</sup> <a name="MinResourcePercentPerRequest" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentPerRequest"></a>

```csharp
public double MinResourcePercentPerRequest { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QueryExecutionTimeoutInSeconds`<sup>Required</sup> <a name="QueryExecutionTimeoutInSeconds" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.queryExecutionTimeoutInSeconds"></a>

```csharp
public double QueryExecutionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `SqlPoolId`<sup>Required</sup> <a name="SqlPoolId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.sqlPoolId"></a>

```csharp
public string SqlPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolWorkloadGroupConfig <a name="SynapseSqlPoolWorkloadGroupConfig" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSqlPoolWorkloadGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double MaxResourcePercent,
    double MinResourcePercent,
    string Name,
    string SqlPoolId,
    string Id = null,
    string Importance = null,
    double MaxResourcePercentPerRequest = null,
    double MinResourcePercentPerRequest = null,
    double QueryExecutionTimeoutInSeconds = null,
    SynapseSqlPoolWorkloadGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.maxResourcePercent">MaxResourcePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent SynapseSqlPoolWorkloadGroup#max_resource_percent}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.minResourcePercent">MinResourcePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent SynapseSqlPoolWorkloadGroup#min_resource_percent}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#name SynapseSqlPoolWorkloadGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.sqlPoolId">SqlPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#sql_pool_id SynapseSqlPoolWorkloadGroup#sql_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#id SynapseSqlPoolWorkloadGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.importance">Importance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#importance SynapseSqlPoolWorkloadGroup#importance}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.maxResourcePercentPerRequest">MaxResourcePercentPerRequest</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent_per_request SynapseSqlPoolWorkloadGroup#max_resource_percent_per_request}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.minResourcePercentPerRequest">MinResourcePercentPerRequest</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent_per_request SynapseSqlPoolWorkloadGroup#min_resource_percent_per_request}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.queryExecutionTimeoutInSeconds">QueryExecutionTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#query_execution_timeout_in_seconds SynapseSqlPoolWorkloadGroup#query_execution_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MaxResourcePercent`<sup>Required</sup> <a name="MaxResourcePercent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.maxResourcePercent"></a>

```csharp
public double MaxResourcePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent SynapseSqlPoolWorkloadGroup#max_resource_percent}.

---

##### `MinResourcePercent`<sup>Required</sup> <a name="MinResourcePercent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.minResourcePercent"></a>

```csharp
public double MinResourcePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent SynapseSqlPoolWorkloadGroup#min_resource_percent}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#name SynapseSqlPoolWorkloadGroup#name}.

---

##### `SqlPoolId`<sup>Required</sup> <a name="SqlPoolId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.sqlPoolId"></a>

```csharp
public string SqlPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#sql_pool_id SynapseSqlPoolWorkloadGroup#sql_pool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#id SynapseSqlPoolWorkloadGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Importance`<sup>Optional</sup> <a name="Importance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.importance"></a>

```csharp
public string Importance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#importance SynapseSqlPoolWorkloadGroup#importance}.

---

##### `MaxResourcePercentPerRequest`<sup>Optional</sup> <a name="MaxResourcePercentPerRequest" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.maxResourcePercentPerRequest"></a>

```csharp
public double MaxResourcePercentPerRequest { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent_per_request SynapseSqlPoolWorkloadGroup#max_resource_percent_per_request}.

---

##### `MinResourcePercentPerRequest`<sup>Optional</sup> <a name="MinResourcePercentPerRequest" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.minResourcePercentPerRequest"></a>

```csharp
public double MinResourcePercentPerRequest { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent_per_request SynapseSqlPoolWorkloadGroup#min_resource_percent_per_request}.

---

##### `QueryExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="QueryExecutionTimeoutInSeconds" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.queryExecutionTimeoutInSeconds"></a>

```csharp
public double QueryExecutionTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#query_execution_timeout_in_seconds SynapseSqlPoolWorkloadGroup#query_execution_timeout_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.timeouts"></a>

```csharp
public SynapseSqlPoolWorkloadGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#timeouts SynapseSqlPoolWorkloadGroup#timeouts}

---

### SynapseSqlPoolWorkloadGroupTimeouts <a name="SynapseSqlPoolWorkloadGroupTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSqlPoolWorkloadGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#create SynapseSqlPoolWorkloadGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#delete SynapseSqlPoolWorkloadGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#read SynapseSqlPoolWorkloadGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#update SynapseSqlPoolWorkloadGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#create SynapseSqlPoolWorkloadGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#delete SynapseSqlPoolWorkloadGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#read SynapseSqlPoolWorkloadGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_sql_pool_workload_group#update SynapseSqlPoolWorkloadGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolWorkloadGroupTimeoutsOutputReference <a name="SynapseSqlPoolWorkloadGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSqlPoolWorkloadGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



