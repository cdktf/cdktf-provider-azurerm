# `databoxEdgeOrder` Submodule <a name="`databoxEdgeOrder` Submodule" id="@cdktf/provider-azurerm.databoxEdgeOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataboxEdgeOrder <a name="DataboxEdgeOrder" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order azurerm_databox_edge_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrder(Construct Scope, string Id, DataboxEdgeOrderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig">DataboxEdgeOrderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig">DataboxEdgeOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putContact">PutContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putShipmentAddress">PutShipmentAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContact` <a name="PutContact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putContact"></a>

```csharp
private void PutContact(DataboxEdgeOrderContact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

---

##### `PutShipmentAddress` <a name="PutShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putShipmentAddress"></a>

```csharp
private void PutShipmentAddress(DataboxEdgeOrderShipmentAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putShipmentAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putTimeouts"></a>

```csharp
private void PutTimeouts(DataboxEdgeOrderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataboxEdgeOrder resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataboxEdgeOrder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataboxEdgeOrder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataboxEdgeOrder.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataboxEdgeOrder.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataboxEdgeOrder resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataboxEdgeOrder to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataboxEdgeOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataboxEdgeOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contact">Contact</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference">DataboxEdgeOrderContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.returnTracking">ReturnTracking</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList">DataboxEdgeOrderReturnTrackingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddress">ShipmentAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference">DataboxEdgeOrderShipmentAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentHistory">ShipmentHistory</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList">DataboxEdgeOrderShipmentHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentTracking">ShipmentTracking</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList">DataboxEdgeOrderShipmentTrackingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.status">Status</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList">DataboxEdgeOrderStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference">DataboxEdgeOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contactInput">ContactInput</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddressInput">ShipmentAddressInput</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Contact`<sup>Required</sup> <a name="Contact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contact"></a>

```csharp
public DataboxEdgeOrderContactOutputReference Contact { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference">DataboxEdgeOrderContactOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReturnTracking`<sup>Required</sup> <a name="ReturnTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.returnTracking"></a>

```csharp
public DataboxEdgeOrderReturnTrackingList ReturnTracking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList">DataboxEdgeOrderReturnTrackingList</a>

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `ShipmentAddress`<sup>Required</sup> <a name="ShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddress"></a>

```csharp
public DataboxEdgeOrderShipmentAddressOutputReference ShipmentAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference">DataboxEdgeOrderShipmentAddressOutputReference</a>

---

##### `ShipmentHistory`<sup>Required</sup> <a name="ShipmentHistory" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentHistory"></a>

```csharp
public DataboxEdgeOrderShipmentHistoryList ShipmentHistory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList">DataboxEdgeOrderShipmentHistoryList</a>

---

##### `ShipmentTracking`<sup>Required</sup> <a name="ShipmentTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentTracking"></a>

```csharp
public DataboxEdgeOrderShipmentTrackingList ShipmentTracking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList">DataboxEdgeOrderShipmentTrackingList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.status"></a>

```csharp
public DataboxEdgeOrderStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList">DataboxEdgeOrderStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeouts"></a>

```csharp
public DataboxEdgeOrderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference">DataboxEdgeOrderTimeoutsOutputReference</a>

---

##### `ContactInput`<sup>Optional</sup> <a name="ContactInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contactInput"></a>

```csharp
public DataboxEdgeOrderContact ContactInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ShipmentAddressInput`<sup>Optional</sup> <a name="ShipmentAddressInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddressInput"></a>

```csharp
public DataboxEdgeOrderShipmentAddress ShipmentAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataboxEdgeOrderConfig <a name="DataboxEdgeOrderConfig" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataboxEdgeOrderContact Contact,
    string DeviceName,
    string ResourceGroupName,
    DataboxEdgeOrderShipmentAddress ShipmentAddress,
    string Id = null,
    DataboxEdgeOrderTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.contact">Contact</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a></code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#device_name DataboxEdgeOrder#device_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#resource_group_name DataboxEdgeOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.shipmentAddress">ShipmentAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a></code> | shipment_address block. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#id DataboxEdgeOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Contact`<sup>Required</sup> <a name="Contact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.contact"></a>

```csharp
public DataboxEdgeOrderContact Contact { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#contact DataboxEdgeOrder#contact}

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#device_name DataboxEdgeOrder#device_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#resource_group_name DataboxEdgeOrder#resource_group_name}.

---

##### `ShipmentAddress`<sup>Required</sup> <a name="ShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.shipmentAddress"></a>

```csharp
public DataboxEdgeOrderShipmentAddress ShipmentAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

shipment_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#shipment_address DataboxEdgeOrder#shipment_address}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#id DataboxEdgeOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.timeouts"></a>

```csharp
public DataboxEdgeOrderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#timeouts DataboxEdgeOrder#timeouts}

---

### DataboxEdgeOrderContact <a name="DataboxEdgeOrderContact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderContact {
    string CompanyName,
    string[] Emails,
    string Name,
    string PhoneNumber
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.companyName">CompanyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#company_name DataboxEdgeOrder#company_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.emails">Emails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#emails DataboxEdgeOrder#emails}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#name DataboxEdgeOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#phone_number DataboxEdgeOrder#phone_number}. |

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.companyName"></a>

```csharp
public string CompanyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#company_name DataboxEdgeOrder#company_name}.

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.emails"></a>

```csharp
public string[] Emails { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#emails DataboxEdgeOrder#emails}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#name DataboxEdgeOrder#name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#phone_number DataboxEdgeOrder#phone_number}.

---

### DataboxEdgeOrderReturnTracking <a name="DataboxEdgeOrderReturnTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderReturnTracking {

};
```


### DataboxEdgeOrderShipmentAddress <a name="DataboxEdgeOrderShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderShipmentAddress {
    string[] Address,
    string City,
    string Country,
    string PostalCode,
    string State
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.address">Address</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#address DataboxEdgeOrder#address}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#city DataboxEdgeOrder#city}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#country DataboxEdgeOrder#country}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#postal_code DataboxEdgeOrder#postal_code}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#state DataboxEdgeOrder#state}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.address"></a>

```csharp
public string[] Address { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#address DataboxEdgeOrder#address}.

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#city DataboxEdgeOrder#city}.

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#country DataboxEdgeOrder#country}.

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#postal_code DataboxEdgeOrder#postal_code}.

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#state DataboxEdgeOrder#state}.

---

### DataboxEdgeOrderShipmentHistory <a name="DataboxEdgeOrderShipmentHistory" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderShipmentHistory {

};
```


### DataboxEdgeOrderShipmentTracking <a name="DataboxEdgeOrderShipmentTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderShipmentTracking {

};
```


### DataboxEdgeOrderStatus <a name="DataboxEdgeOrderStatus" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderStatus {

};
```


### DataboxEdgeOrderTimeouts <a name="DataboxEdgeOrderTimeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#create DataboxEdgeOrder#create}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#delete DataboxEdgeOrder#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#read DataboxEdgeOrder#read}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#update DataboxEdgeOrder#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#create DataboxEdgeOrder#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#delete DataboxEdgeOrder#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#read DataboxEdgeOrder#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/databox_edge_order#update DataboxEdgeOrder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataboxEdgeOrderContactOutputReference <a name="DataboxEdgeOrderContactOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyNameInput">CompanyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emailsInput">EmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emails">Emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyNameInput"></a>

```csharp
public string CompanyNameInput { get; }
```

- *Type:* string

---

##### `EmailsInput`<sup>Optional</sup> <a name="EmailsInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emailsInput"></a>

```csharp
public string[] EmailsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emails"></a>

```csharp
public string[] Emails { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.internalValue"></a>

```csharp
public DataboxEdgeOrderContact InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

---


### DataboxEdgeOrderReturnTrackingList <a name="DataboxEdgeOrderReturnTrackingList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderReturnTrackingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.get"></a>

```csharp
private DataboxEdgeOrderReturnTrackingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataboxEdgeOrderReturnTrackingOutputReference <a name="DataboxEdgeOrderReturnTrackingOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderReturnTrackingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.carrierName">CarrierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingId">TrackingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingUrl">TrackingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking">DataboxEdgeOrderReturnTracking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CarrierName`<sup>Required</sup> <a name="CarrierName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.carrierName"></a>

```csharp
public string CarrierName { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `TrackingId`<sup>Required</sup> <a name="TrackingId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingId"></a>

```csharp
public string TrackingId { get; }
```

- *Type:* string

---

##### `TrackingUrl`<sup>Required</sup> <a name="TrackingUrl" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingUrl"></a>

```csharp
public string TrackingUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.internalValue"></a>

```csharp
public DataboxEdgeOrderReturnTracking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking">DataboxEdgeOrderReturnTracking</a>

---


### DataboxEdgeOrderShipmentAddressOutputReference <a name="DataboxEdgeOrderShipmentAddressOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderShipmentAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.addressInput">AddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.address">Address</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.addressInput"></a>

```csharp
public string[] AddressInput { get; }
```

- *Type:* string[]

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.address"></a>

```csharp
public string[] Address { get; }
```

- *Type:* string[]

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.internalValue"></a>

```csharp
public DataboxEdgeOrderShipmentAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

---


### DataboxEdgeOrderShipmentHistoryList <a name="DataboxEdgeOrderShipmentHistoryList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderShipmentHistoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.get"></a>

```csharp
private DataboxEdgeOrderShipmentHistoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataboxEdgeOrderShipmentHistoryOutputReference <a name="DataboxEdgeOrderShipmentHistoryOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderShipmentHistoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.lastUpdate">LastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory">DataboxEdgeOrderShipmentHistory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.lastUpdate"></a>

```csharp
public string LastUpdate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.internalValue"></a>

```csharp
public DataboxEdgeOrderShipmentHistory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory">DataboxEdgeOrderShipmentHistory</a>

---


### DataboxEdgeOrderShipmentTrackingList <a name="DataboxEdgeOrderShipmentTrackingList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderShipmentTrackingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.get"></a>

```csharp
private DataboxEdgeOrderShipmentTrackingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataboxEdgeOrderShipmentTrackingOutputReference <a name="DataboxEdgeOrderShipmentTrackingOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderShipmentTrackingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.carrierName">CarrierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingId">TrackingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingUrl">TrackingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking">DataboxEdgeOrderShipmentTracking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CarrierName`<sup>Required</sup> <a name="CarrierName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.carrierName"></a>

```csharp
public string CarrierName { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `TrackingId`<sup>Required</sup> <a name="TrackingId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingId"></a>

```csharp
public string TrackingId { get; }
```

- *Type:* string

---

##### `TrackingUrl`<sup>Required</sup> <a name="TrackingUrl" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingUrl"></a>

```csharp
public string TrackingUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.internalValue"></a>

```csharp
public DataboxEdgeOrderShipmentTracking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking">DataboxEdgeOrderShipmentTracking</a>

---


### DataboxEdgeOrderStatusList <a name="DataboxEdgeOrderStatusList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.get"></a>

```csharp
private DataboxEdgeOrderStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataboxEdgeOrderStatusOutputReference <a name="DataboxEdgeOrderStatusOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.info">Info</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.lastUpdate">LastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus">DataboxEdgeOrderStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.info"></a>

```csharp
public string Info { get; }
```

- *Type:* string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.lastUpdate"></a>

```csharp
public string LastUpdate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.internalValue"></a>

```csharp
public DataboxEdgeOrderStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus">DataboxEdgeOrderStatus</a>

---


### DataboxEdgeOrderTimeoutsOutputReference <a name="DataboxEdgeOrderTimeoutsOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataboxEdgeOrderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



