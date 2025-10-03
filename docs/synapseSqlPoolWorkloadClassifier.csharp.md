# `synapseSqlPoolWorkloadClassifier` Submodule <a name="`synapseSqlPoolWorkloadClassifier` Submodule" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPoolWorkloadClassifier <a name="SynapseSqlPoolWorkloadClassifier" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier azurerm_synapse_sql_pool_workload_classifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSqlPoolWorkloadClassifier(Construct Scope, string Id, SynapseSqlPoolWorkloadClassifierConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig">SynapseSqlPoolWorkloadClassifierConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig">SynapseSqlPoolWorkloadClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetImportance">ResetImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.putTimeouts"></a>

```csharp
private void PutTimeouts(SynapseSqlPoolWorkloadClassifierTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts">SynapseSqlPoolWorkloadClassifierTimeouts</a>

---

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportance` <a name="ResetImportance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetImportance"></a>

```csharp
private void ResetImportance()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseSqlPoolWorkloadClassifier resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSqlPoolWorkloadClassifier.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSqlPoolWorkloadClassifier.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSqlPoolWorkloadClassifier.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSqlPoolWorkloadClassifier.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SynapseSqlPoolWorkloadClassifier resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapseSqlPoolWorkloadClassifier to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapseSqlPoolWorkloadClassifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SynapseSqlPoolWorkloadClassifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference">SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.importanceInput">ImportanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.memberNameInput">MemberNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.workloadGroupIdInput">WorkloadGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.importance">Importance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.memberName">MemberName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.workloadGroupId">WorkloadGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.timeouts"></a>

```csharp
public SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference">SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference</a>

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportanceInput`<sup>Optional</sup> <a name="ImportanceInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.importanceInput"></a>

```csharp
public string ImportanceInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `MemberNameInput`<sup>Optional</sup> <a name="MemberNameInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.memberNameInput"></a>

```csharp
public string MemberNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkloadGroupIdInput`<sup>Optional</sup> <a name="WorkloadGroupIdInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.workloadGroupIdInput"></a>

```csharp
public string WorkloadGroupIdInput { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Importance`<sup>Required</sup> <a name="Importance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.importance"></a>

```csharp
public string Importance { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `MemberName`<sup>Required</sup> <a name="MemberName" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.memberName"></a>

```csharp
public string MemberName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `WorkloadGroupId`<sup>Required</sup> <a name="WorkloadGroupId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.workloadGroupId"></a>

```csharp
public string WorkloadGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifier.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolWorkloadClassifierConfig <a name="SynapseSqlPoolWorkloadClassifierConfig" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSqlPoolWorkloadClassifierConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MemberName,
    string Name,
    string WorkloadGroupId,
    string Context = null,
    string EndTime = null,
    string Id = null,
    string Importance = null,
    string Label = null,
    string StartTime = null,
    SynapseSqlPoolWorkloadClassifierTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.memberName">MemberName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#member_name SynapseSqlPoolWorkloadClassifier#member_name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#name SynapseSqlPoolWorkloadClassifier#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.workloadGroupId">WorkloadGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#workload_group_id SynapseSqlPoolWorkloadClassifier#workload_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.context">Context</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#context SynapseSqlPoolWorkloadClassifier#context}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#end_time SynapseSqlPoolWorkloadClassifier#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#id SynapseSqlPoolWorkloadClassifier#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.importance">Importance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#importance SynapseSqlPoolWorkloadClassifier#importance}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#label SynapseSqlPoolWorkloadClassifier#label}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#start_time SynapseSqlPoolWorkloadClassifier#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts">SynapseSqlPoolWorkloadClassifierTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MemberName`<sup>Required</sup> <a name="MemberName" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.memberName"></a>

```csharp
public string MemberName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#member_name SynapseSqlPoolWorkloadClassifier#member_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#name SynapseSqlPoolWorkloadClassifier#name}.

---

##### `WorkloadGroupId`<sup>Required</sup> <a name="WorkloadGroupId" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.workloadGroupId"></a>

```csharp
public string WorkloadGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#workload_group_id SynapseSqlPoolWorkloadClassifier#workload_group_id}.

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#context SynapseSqlPoolWorkloadClassifier#context}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#end_time SynapseSqlPoolWorkloadClassifier#end_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#id SynapseSqlPoolWorkloadClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Importance`<sup>Optional</sup> <a name="Importance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.importance"></a>

```csharp
public string Importance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#importance SynapseSqlPoolWorkloadClassifier#importance}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#label SynapseSqlPoolWorkloadClassifier#label}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#start_time SynapseSqlPoolWorkloadClassifier#start_time}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierConfig.property.timeouts"></a>

```csharp
public SynapseSqlPoolWorkloadClassifierTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts">SynapseSqlPoolWorkloadClassifierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#timeouts SynapseSqlPoolWorkloadClassifier#timeouts}

---

### SynapseSqlPoolWorkloadClassifierTimeouts <a name="SynapseSqlPoolWorkloadClassifierTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSqlPoolWorkloadClassifierTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#create SynapseSqlPoolWorkloadClassifier#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#delete SynapseSqlPoolWorkloadClassifier#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#read SynapseSqlPoolWorkloadClassifier#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#update SynapseSqlPoolWorkloadClassifier#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#create SynapseSqlPoolWorkloadClassifier#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#delete SynapseSqlPoolWorkloadClassifier#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#read SynapseSqlPoolWorkloadClassifier#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/synapse_sql_pool_workload_classifier#update SynapseSqlPoolWorkloadClassifier#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference <a name="SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadClassifier.SynapseSqlPoolWorkloadClassifierTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



