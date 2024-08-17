# `dataFactoryDataFlow` Submodule <a name="`dataFactoryDataFlow` Submodule" id="@cdktf/provider-azurerm.dataFactoryDataFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDataFlow <a name="DataFactoryDataFlow" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow azurerm_data_factory_data_flow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlow(Construct Scope, string Id, DataFactoryDataFlowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig">DataFactoryDataFlowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig">DataFactoryDataFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSink">PutSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetScriptLines">ResetScriptLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSink` <a name="PutSink" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSink"></a>

```csharp
private void PutSink(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSink.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSource"></a>

```csharp
private void PutSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSource.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryDataFlowTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts">DataFactoryDataFlowTimeouts</a>

---

##### `PutTransformation` <a name="PutTransformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTransformation"></a>

```csharp
private void PutTransformation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTransformation.parameter.value"></a>

- *Type:* object

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetScript"></a>

```csharp
private void ResetScript()
```

##### `ResetScriptLines` <a name="ResetScriptLines" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetScriptLines"></a>

```csharp
private void ResetScriptLines()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetTransformation"></a>

```csharp
private void ResetTransformation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryDataFlow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryDataFlow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryDataFlow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryDataFlow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryDataFlow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataFactoryDataFlow resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryDataFlow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryDataFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDataFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sink">Sink</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList">DataFactoryDataFlowSinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList">DataFactoryDataFlowSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference">DataFactoryDataFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.transformation">Transformation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList">DataFactoryDataFlowTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptLinesInput">ScriptLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sinkInput">SinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sourceInput">SourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.transformationInput">TransformationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptLines">ScriptLines</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Sink`<sup>Required</sup> <a name="Sink" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sink"></a>

```csharp
public DataFactoryDataFlowSinkList Sink { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList">DataFactoryDataFlowSinkList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.source"></a>

```csharp
public DataFactoryDataFlowSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList">DataFactoryDataFlowSourceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.timeouts"></a>

```csharp
public DataFactoryDataFlowTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference">DataFactoryDataFlowTimeoutsOutputReference</a>

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.transformation"></a>

```csharp
public DataFactoryDataFlowTransformationList Transformation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList">DataFactoryDataFlowTransformationList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `ScriptLinesInput`<sup>Optional</sup> <a name="ScriptLinesInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptLinesInput"></a>

```csharp
public string[] ScriptLinesInput { get; }
```

- *Type:* string[]

---

##### `SinkInput`<sup>Optional</sup> <a name="SinkInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sinkInput"></a>

```csharp
public object SinkInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sourceInput"></a>

```csharp
public object SourceInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.transformationInput"></a>

```csharp
public object TransformationInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `ScriptLines`<sup>Required</sup> <a name="ScriptLines" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptLines"></a>

```csharp
public string[] ScriptLines { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDataFlowConfig <a name="DataFactoryDataFlowConfig" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataFactoryId,
    string Name,
    object Sink,
    object Source,
    string[] Annotations = null,
    string Description = null,
    string Folder = null,
    string Id = null,
    string Script = null,
    string[] ScriptLines = null,
    DataFactoryDataFlowTimeouts Timeouts = null,
    object Transformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#data_factory_id DataFactoryDataFlow#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.sink">Sink</a></code> | <code>object</code> | sink block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.source">Source</a></code> | <code>object</code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#annotations DataFactoryDataFlow#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.folder">Folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#folder DataFactoryDataFlow#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#id DataFactoryDataFlow#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.script">Script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#script DataFactoryDataFlow#script}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.scriptLines">ScriptLines</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#script_lines DataFactoryDataFlow#script_lines}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts">DataFactoryDataFlowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.transformation">Transformation</a></code> | <code>object</code> | transformation block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#data_factory_id DataFactoryDataFlow#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Sink`<sup>Required</sup> <a name="Sink" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.sink"></a>

```csharp
public object Sink { get; set; }
```

- *Type:* object

sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#sink DataFactoryDataFlow#sink}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.source"></a>

```csharp
public object Source { get; set; }
```

- *Type:* object

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#source DataFactoryDataFlow#source}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#annotations DataFactoryDataFlow#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#folder DataFactoryDataFlow#folder}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#id DataFactoryDataFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#script DataFactoryDataFlow#script}.

---

##### `ScriptLines`<sup>Optional</sup> <a name="ScriptLines" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.scriptLines"></a>

```csharp
public string[] ScriptLines { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#script_lines DataFactoryDataFlow#script_lines}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.timeouts"></a>

```csharp
public DataFactoryDataFlowTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts">DataFactoryDataFlowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#timeouts DataFactoryDataFlow#timeouts}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.transformation"></a>

```csharp
public object Transformation { get; set; }
```

- *Type:* object

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#transformation DataFactoryDataFlow#transformation}

---

### DataFactoryDataFlowSink <a name="DataFactoryDataFlowSink" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSink {
    string Name,
    DataFactoryDataFlowSinkDataset Dataset = null,
    string Description = null,
    DataFactoryDataFlowSinkFlowlet Flowlet = null,
    DataFactoryDataFlowSinkLinkedService LinkedService = null,
    DataFactoryDataFlowSinkRejectedLinkedService RejectedLinkedService = null,
    DataFactoryDataFlowSinkSchemaLinkedService SchemaLinkedService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a></code> | flowlet block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a></code> | linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a></code> | rejected_linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a></code> | schema_linked_service block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.dataset"></a>

```csharp
public DataFactoryDataFlowSinkDataset Dataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#dataset DataFactoryDataFlow#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}.

---

##### `Flowlet`<sup>Optional</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.flowlet"></a>

```csharp
public DataFactoryDataFlowSinkFlowlet Flowlet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a>

flowlet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#flowlet DataFactoryDataFlow#flowlet}

---

##### `LinkedService`<sup>Optional</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.linkedService"></a>

```csharp
public DataFactoryDataFlowSinkLinkedService LinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#linked_service DataFactoryDataFlow#linked_service}

---

##### `RejectedLinkedService`<sup>Optional</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.rejectedLinkedService"></a>

```csharp
public DataFactoryDataFlowSinkRejectedLinkedService RejectedLinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a>

rejected_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#rejected_linked_service DataFactoryDataFlow#rejected_linked_service}

---

##### `SchemaLinkedService`<sup>Optional</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.schemaLinkedService"></a>

```csharp
public DataFactoryDataFlowSinkSchemaLinkedService SchemaLinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a>

schema_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#schema_linked_service DataFactoryDataFlow#schema_linked_service}

---

### DataFactoryDataFlowSinkDataset <a name="DataFactoryDataFlowSinkDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkDataset {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSinkFlowlet <a name="DataFactoryDataFlowSinkFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkFlowlet {
    string Name,
    string DatasetParameters = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `DatasetParameters`<sup>Optional</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSinkLinkedService <a name="DataFactoryDataFlowSinkLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSinkRejectedLinkedService <a name="DataFactoryDataFlowSinkRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkRejectedLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSinkSchemaLinkedService <a name="DataFactoryDataFlowSinkSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkSchemaLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSource <a name="DataFactoryDataFlowSource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSource {
    string Name,
    DataFactoryDataFlowSourceDataset Dataset = null,
    string Description = null,
    DataFactoryDataFlowSourceFlowlet Flowlet = null,
    DataFactoryDataFlowSourceLinkedService LinkedService = null,
    DataFactoryDataFlowSourceRejectedLinkedService RejectedLinkedService = null,
    DataFactoryDataFlowSourceSchemaLinkedService SchemaLinkedService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a></code> | flowlet block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a></code> | linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a></code> | rejected_linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a></code> | schema_linked_service block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.dataset"></a>

```csharp
public DataFactoryDataFlowSourceDataset Dataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#dataset DataFactoryDataFlow#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}.

---

##### `Flowlet`<sup>Optional</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.flowlet"></a>

```csharp
public DataFactoryDataFlowSourceFlowlet Flowlet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a>

flowlet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#flowlet DataFactoryDataFlow#flowlet}

---

##### `LinkedService`<sup>Optional</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.linkedService"></a>

```csharp
public DataFactoryDataFlowSourceLinkedService LinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#linked_service DataFactoryDataFlow#linked_service}

---

##### `RejectedLinkedService`<sup>Optional</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.rejectedLinkedService"></a>

```csharp
public DataFactoryDataFlowSourceRejectedLinkedService RejectedLinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a>

rejected_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#rejected_linked_service DataFactoryDataFlow#rejected_linked_service}

---

##### `SchemaLinkedService`<sup>Optional</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.schemaLinkedService"></a>

```csharp
public DataFactoryDataFlowSourceSchemaLinkedService SchemaLinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a>

schema_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#schema_linked_service DataFactoryDataFlow#schema_linked_service}

---

### DataFactoryDataFlowSourceDataset <a name="DataFactoryDataFlowSourceDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceDataset {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSourceFlowlet <a name="DataFactoryDataFlowSourceFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceFlowlet {
    string Name,
    string DatasetParameters = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `DatasetParameters`<sup>Optional</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSourceLinkedService <a name="DataFactoryDataFlowSourceLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSourceRejectedLinkedService <a name="DataFactoryDataFlowSourceRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceRejectedLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSourceSchemaLinkedService <a name="DataFactoryDataFlowSourceSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceSchemaLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowTimeouts <a name="DataFactoryDataFlowTimeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#create DataFactoryDataFlow#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#delete DataFactoryDataFlow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#read DataFactoryDataFlow#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#update DataFactoryDataFlow#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#create DataFactoryDataFlow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#delete DataFactoryDataFlow#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#read DataFactoryDataFlow#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#update DataFactoryDataFlow#update}.

---

### DataFactoryDataFlowTransformation <a name="DataFactoryDataFlowTransformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTransformation {
    string Name,
    DataFactoryDataFlowTransformationDataset Dataset = null,
    string Description = null,
    DataFactoryDataFlowTransformationFlowlet Flowlet = null,
    DataFactoryDataFlowTransformationLinkedService LinkedService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a></code> | flowlet block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a></code> | linked_service block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.dataset"></a>

```csharp
public DataFactoryDataFlowTransformationDataset Dataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#dataset DataFactoryDataFlow#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}.

---

##### `Flowlet`<sup>Optional</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.flowlet"></a>

```csharp
public DataFactoryDataFlowTransformationFlowlet Flowlet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a>

flowlet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#flowlet DataFactoryDataFlow#flowlet}

---

##### `LinkedService`<sup>Optional</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.linkedService"></a>

```csharp
public DataFactoryDataFlowTransformationLinkedService LinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#linked_service DataFactoryDataFlow#linked_service}

---

### DataFactoryDataFlowTransformationDataset <a name="DataFactoryDataFlowTransformationDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTransformationDataset {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowTransformationFlowlet <a name="DataFactoryDataFlowTransformationFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTransformationFlowlet {
    string Name,
    string DatasetParameters = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `DatasetParameters`<sup>Optional</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowTransformationLinkedService <a name="DataFactoryDataFlowTransformationLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTransformationLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDataFlowSinkDatasetOutputReference <a name="DataFactoryDataFlowSinkDatasetOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSinkDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a>

---


### DataFactoryDataFlowSinkFlowletOutputReference <a name="DataFactoryDataFlowSinkFlowletOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkFlowletOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resetDatasetParameters">ResetDatasetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetParameters` <a name="ResetDatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resetDatasetParameters"></a>

```csharp
private void ResetDatasetParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.datasetParametersInput">DatasetParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetParametersInput`<sup>Optional</sup> <a name="DatasetParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.datasetParametersInput"></a>

```csharp
public string DatasetParametersInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatasetParameters`<sup>Required</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSinkFlowlet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a>

---


### DataFactoryDataFlowSinkLinkedServiceOutputReference <a name="DataFactoryDataFlowSinkLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSinkLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a>

---


### DataFactoryDataFlowSinkList <a name="DataFactoryDataFlowSinkList" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.get"></a>

```csharp
private DataFactoryDataFlowSinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryDataFlowSinkOutputReference <a name="DataFactoryDataFlowSinkOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putFlowlet">PutFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putLinkedService">PutLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putRejectedLinkedService">PutRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putSchemaLinkedService">PutSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetFlowlet">ResetFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetLinkedService">ResetLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetRejectedLinkedService">ResetRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetSchemaLinkedService">ResetSchemaLinkedService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putDataset"></a>

```csharp
private void PutDataset(DataFactoryDataFlowSinkDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a>

---

##### `PutFlowlet` <a name="PutFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putFlowlet"></a>

```csharp
private void PutFlowlet(DataFactoryDataFlowSinkFlowlet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putFlowlet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a>

---

##### `PutLinkedService` <a name="PutLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putLinkedService"></a>

```csharp
private void PutLinkedService(DataFactoryDataFlowSinkLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a>

---

##### `PutRejectedLinkedService` <a name="PutRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putRejectedLinkedService"></a>

```csharp
private void PutRejectedLinkedService(DataFactoryDataFlowSinkRejectedLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putRejectedLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a>

---

##### `PutSchemaLinkedService` <a name="PutSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putSchemaLinkedService"></a>

```csharp
private void PutSchemaLinkedService(DataFactoryDataFlowSinkSchemaLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putSchemaLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFlowlet` <a name="ResetFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetFlowlet"></a>

```csharp
private void ResetFlowlet()
```

##### `ResetLinkedService` <a name="ResetLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetLinkedService"></a>

```csharp
private void ResetLinkedService()
```

##### `ResetRejectedLinkedService` <a name="ResetRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetRejectedLinkedService"></a>

```csharp
private void ResetRejectedLinkedService()
```

##### `ResetSchemaLinkedService` <a name="ResetSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetSchemaLinkedService"></a>

```csharp
private void ResetSchemaLinkedService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference">DataFactoryDataFlowSinkDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference">DataFactoryDataFlowSinkFlowletOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference">DataFactoryDataFlowSinkLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference">DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference">DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.flowletInput">FlowletInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.linkedServiceInput">LinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.rejectedLinkedServiceInput">RejectedLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.schemaLinkedServiceInput">SchemaLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.dataset"></a>

```csharp
public DataFactoryDataFlowSinkDatasetOutputReference Dataset { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference">DataFactoryDataFlowSinkDatasetOutputReference</a>

---

##### `Flowlet`<sup>Required</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.flowlet"></a>

```csharp
public DataFactoryDataFlowSinkFlowletOutputReference Flowlet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference">DataFactoryDataFlowSinkFlowletOutputReference</a>

---

##### `LinkedService`<sup>Required</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.linkedService"></a>

```csharp
public DataFactoryDataFlowSinkLinkedServiceOutputReference LinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference">DataFactoryDataFlowSinkLinkedServiceOutputReference</a>

---

##### `RejectedLinkedService`<sup>Required</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.rejectedLinkedService"></a>

```csharp
public DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference RejectedLinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference">DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference</a>

---

##### `SchemaLinkedService`<sup>Required</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.schemaLinkedService"></a>

```csharp
public DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference SchemaLinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference">DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.datasetInput"></a>

```csharp
public DataFactoryDataFlowSinkDataset DatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FlowletInput`<sup>Optional</sup> <a name="FlowletInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.flowletInput"></a>

```csharp
public DataFactoryDataFlowSinkFlowlet FlowletInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a>

---

##### `LinkedServiceInput`<sup>Optional</sup> <a name="LinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.linkedServiceInput"></a>

```csharp
public DataFactoryDataFlowSinkLinkedService LinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RejectedLinkedServiceInput`<sup>Optional</sup> <a name="RejectedLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.rejectedLinkedServiceInput"></a>

```csharp
public DataFactoryDataFlowSinkRejectedLinkedService RejectedLinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a>

---

##### `SchemaLinkedServiceInput`<sup>Optional</sup> <a name="SchemaLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.schemaLinkedServiceInput"></a>

```csharp
public DataFactoryDataFlowSinkSchemaLinkedService SchemaLinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference <a name="DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSinkRejectedLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a>

---


### DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference <a name="DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSinkSchemaLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a>

---


### DataFactoryDataFlowSourceDatasetOutputReference <a name="DataFactoryDataFlowSourceDatasetOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSourceDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a>

---


### DataFactoryDataFlowSourceFlowletOutputReference <a name="DataFactoryDataFlowSourceFlowletOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceFlowletOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resetDatasetParameters">ResetDatasetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetParameters` <a name="ResetDatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resetDatasetParameters"></a>

```csharp
private void ResetDatasetParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.datasetParametersInput">DatasetParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetParametersInput`<sup>Optional</sup> <a name="DatasetParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.datasetParametersInput"></a>

```csharp
public string DatasetParametersInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatasetParameters`<sup>Required</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSourceFlowlet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a>

---


### DataFactoryDataFlowSourceLinkedServiceOutputReference <a name="DataFactoryDataFlowSourceLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSourceLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a>

---


### DataFactoryDataFlowSourceList <a name="DataFactoryDataFlowSourceList" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.get"></a>

```csharp
private DataFactoryDataFlowSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryDataFlowSourceOutputReference <a name="DataFactoryDataFlowSourceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putFlowlet">PutFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putLinkedService">PutLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putRejectedLinkedService">PutRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putSchemaLinkedService">PutSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetFlowlet">ResetFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetLinkedService">ResetLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetRejectedLinkedService">ResetRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetSchemaLinkedService">ResetSchemaLinkedService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putDataset"></a>

```csharp
private void PutDataset(DataFactoryDataFlowSourceDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a>

---

##### `PutFlowlet` <a name="PutFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putFlowlet"></a>

```csharp
private void PutFlowlet(DataFactoryDataFlowSourceFlowlet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putFlowlet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a>

---

##### `PutLinkedService` <a name="PutLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putLinkedService"></a>

```csharp
private void PutLinkedService(DataFactoryDataFlowSourceLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a>

---

##### `PutRejectedLinkedService` <a name="PutRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putRejectedLinkedService"></a>

```csharp
private void PutRejectedLinkedService(DataFactoryDataFlowSourceRejectedLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putRejectedLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a>

---

##### `PutSchemaLinkedService` <a name="PutSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putSchemaLinkedService"></a>

```csharp
private void PutSchemaLinkedService(DataFactoryDataFlowSourceSchemaLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putSchemaLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFlowlet` <a name="ResetFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetFlowlet"></a>

```csharp
private void ResetFlowlet()
```

##### `ResetLinkedService` <a name="ResetLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetLinkedService"></a>

```csharp
private void ResetLinkedService()
```

##### `ResetRejectedLinkedService` <a name="ResetRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetRejectedLinkedService"></a>

```csharp
private void ResetRejectedLinkedService()
```

##### `ResetSchemaLinkedService` <a name="ResetSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetSchemaLinkedService"></a>

```csharp
private void ResetSchemaLinkedService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference">DataFactoryDataFlowSourceDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference">DataFactoryDataFlowSourceFlowletOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference">DataFactoryDataFlowSourceLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference">DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference">DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.flowletInput">FlowletInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.linkedServiceInput">LinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.rejectedLinkedServiceInput">RejectedLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.schemaLinkedServiceInput">SchemaLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.dataset"></a>

```csharp
public DataFactoryDataFlowSourceDatasetOutputReference Dataset { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference">DataFactoryDataFlowSourceDatasetOutputReference</a>

---

##### `Flowlet`<sup>Required</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.flowlet"></a>

```csharp
public DataFactoryDataFlowSourceFlowletOutputReference Flowlet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference">DataFactoryDataFlowSourceFlowletOutputReference</a>

---

##### `LinkedService`<sup>Required</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.linkedService"></a>

```csharp
public DataFactoryDataFlowSourceLinkedServiceOutputReference LinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference">DataFactoryDataFlowSourceLinkedServiceOutputReference</a>

---

##### `RejectedLinkedService`<sup>Required</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.rejectedLinkedService"></a>

```csharp
public DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference RejectedLinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference">DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference</a>

---

##### `SchemaLinkedService`<sup>Required</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.schemaLinkedService"></a>

```csharp
public DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference SchemaLinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference">DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.datasetInput"></a>

```csharp
public DataFactoryDataFlowSourceDataset DatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FlowletInput`<sup>Optional</sup> <a name="FlowletInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.flowletInput"></a>

```csharp
public DataFactoryDataFlowSourceFlowlet FlowletInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a>

---

##### `LinkedServiceInput`<sup>Optional</sup> <a name="LinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.linkedServiceInput"></a>

```csharp
public DataFactoryDataFlowSourceLinkedService LinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RejectedLinkedServiceInput`<sup>Optional</sup> <a name="RejectedLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.rejectedLinkedServiceInput"></a>

```csharp
public DataFactoryDataFlowSourceRejectedLinkedService RejectedLinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a>

---

##### `SchemaLinkedServiceInput`<sup>Optional</sup> <a name="SchemaLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.schemaLinkedServiceInput"></a>

```csharp
public DataFactoryDataFlowSourceSchemaLinkedService SchemaLinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference <a name="DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSourceRejectedLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a>

---


### DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference <a name="DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowSourceSchemaLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a>

---


### DataFactoryDataFlowTimeoutsOutputReference <a name="DataFactoryDataFlowTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryDataFlowTransformationDatasetOutputReference <a name="DataFactoryDataFlowTransformationDatasetOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTransformationDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowTransformationDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a>

---


### DataFactoryDataFlowTransformationFlowletOutputReference <a name="DataFactoryDataFlowTransformationFlowletOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTransformationFlowletOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resetDatasetParameters">ResetDatasetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetParameters` <a name="ResetDatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resetDatasetParameters"></a>

```csharp
private void ResetDatasetParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.datasetParametersInput">DatasetParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetParametersInput`<sup>Optional</sup> <a name="DatasetParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.datasetParametersInput"></a>

```csharp
public string DatasetParametersInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatasetParameters`<sup>Required</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowTransformationFlowlet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a>

---


### DataFactoryDataFlowTransformationLinkedServiceOutputReference <a name="DataFactoryDataFlowTransformationLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTransformationLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDataFlowTransformationLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a>

---


### DataFactoryDataFlowTransformationList <a name="DataFactoryDataFlowTransformationList" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTransformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.get"></a>

```csharp
private DataFactoryDataFlowTransformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryDataFlowTransformationOutputReference <a name="DataFactoryDataFlowTransformationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDataFlowTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putFlowlet">PutFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putLinkedService">PutLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetFlowlet">ResetFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetLinkedService">ResetLinkedService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putDataset"></a>

```csharp
private void PutDataset(DataFactoryDataFlowTransformationDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a>

---

##### `PutFlowlet` <a name="PutFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putFlowlet"></a>

```csharp
private void PutFlowlet(DataFactoryDataFlowTransformationFlowlet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putFlowlet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a>

---

##### `PutLinkedService` <a name="PutLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putLinkedService"></a>

```csharp
private void PutLinkedService(DataFactoryDataFlowTransformationLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFlowlet` <a name="ResetFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetFlowlet"></a>

```csharp
private void ResetFlowlet()
```

##### `ResetLinkedService` <a name="ResetLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetLinkedService"></a>

```csharp
private void ResetLinkedService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference">DataFactoryDataFlowTransformationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference">DataFactoryDataFlowTransformationFlowletOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference">DataFactoryDataFlowTransformationLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.flowletInput">FlowletInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.linkedServiceInput">LinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.dataset"></a>

```csharp
public DataFactoryDataFlowTransformationDatasetOutputReference Dataset { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference">DataFactoryDataFlowTransformationDatasetOutputReference</a>

---

##### `Flowlet`<sup>Required</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.flowlet"></a>

```csharp
public DataFactoryDataFlowTransformationFlowletOutputReference Flowlet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference">DataFactoryDataFlowTransformationFlowletOutputReference</a>

---

##### `LinkedService`<sup>Required</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.linkedService"></a>

```csharp
public DataFactoryDataFlowTransformationLinkedServiceOutputReference LinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference">DataFactoryDataFlowTransformationLinkedServiceOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.datasetInput"></a>

```csharp
public DataFactoryDataFlowTransformationDataset DatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FlowletInput`<sup>Optional</sup> <a name="FlowletInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.flowletInput"></a>

```csharp
public DataFactoryDataFlowTransformationFlowlet FlowletInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a>

---

##### `LinkedServiceInput`<sup>Optional</sup> <a name="LinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.linkedServiceInput"></a>

```csharp
public DataFactoryDataFlowTransformationLinkedService LinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



