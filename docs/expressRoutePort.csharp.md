# `expressRoutePort` Submodule <a name="`expressRoutePort` Submodule" id="@cdktf/provider-azurerm.expressRoutePort"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRoutePort <a name="ExpressRoutePort" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port azurerm_express_route_port}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePort(Construct Scope, string Id, ExpressRoutePortConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig">ExpressRoutePortConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig">ExpressRoutePortConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1">PutLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2">PutLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType">ResetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1">ResetLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2">ResetLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity"></a>

```csharp
private void PutIdentity(ExpressRoutePortIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---

##### `PutLink1` <a name="PutLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1"></a>

```csharp
private void PutLink1(ExpressRoutePortLink1 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---

##### `PutLink2` <a name="PutLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2"></a>

```csharp
private void PutLink2(ExpressRoutePortLink2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts"></a>

```csharp
private void PutTimeouts(ExpressRoutePortTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

---

##### `ResetBillingType` <a name="ResetBillingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType"></a>

```csharp
private void ResetBillingType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLink1` <a name="ResetLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1"></a>

```csharp
private void ResetLink1()
```

##### `ResetLink2` <a name="ResetLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2"></a>

```csharp
private void ResetLink2()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExpressRoutePort.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExpressRoutePort.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExpressRoutePort.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExpressRoutePort.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExpressRoutePort to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExpressRoutePort that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRoutePort to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype">Ethertype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1">Link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2">Link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu">Mtu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput">BandwidthInGbpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput">BillingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput">EncapsulationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input">Link1Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input">Link2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput">PeeringLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps">BandwidthInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType">BillingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation">Encapsulation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation">PeeringLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Ethertype`<sup>Required</sup> <a name="Ethertype" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype"></a>

```csharp
public string Ethertype { get; }
```

- *Type:* string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity"></a>

```csharp
public ExpressRoutePortIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a>

---

##### `Link1`<sup>Required</sup> <a name="Link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1"></a>

```csharp
public ExpressRoutePortLink1OutputReference Link1 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a>

---

##### `Link2`<sup>Required</sup> <a name="Link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2"></a>

```csharp
public ExpressRoutePortLink2OutputReference Link2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a>

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu"></a>

```csharp
public string Mtu { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts"></a>

```csharp
public ExpressRoutePortTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a>

---

##### `BandwidthInGbpsInput`<sup>Optional</sup> <a name="BandwidthInGbpsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput"></a>

```csharp
public double BandwidthInGbpsInput { get; }
```

- *Type:* double

---

##### `BillingTypeInput`<sup>Optional</sup> <a name="BillingTypeInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput"></a>

```csharp
public string BillingTypeInput { get; }
```

- *Type:* string

---

##### `EncapsulationInput`<sup>Optional</sup> <a name="EncapsulationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput"></a>

```csharp
public string EncapsulationInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput"></a>

```csharp
public ExpressRoutePortIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Link1Input`<sup>Optional</sup> <a name="Link1Input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input"></a>

```csharp
public ExpressRoutePortLink1 Link1Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---

##### `Link2Input`<sup>Optional</sup> <a name="Link2Input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input"></a>

```csharp
public ExpressRoutePortLink2 Link2Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeeringLocationInput`<sup>Optional</sup> <a name="PeeringLocationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput"></a>

```csharp
public string PeeringLocationInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BandwidthInGbps`<sup>Required</sup> <a name="BandwidthInGbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps"></a>

```csharp
public double BandwidthInGbps { get; }
```

- *Type:* double

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType"></a>

```csharp
public string BillingType { get; }
```

- *Type:* string

---

##### `Encapsulation`<sup>Required</sup> <a name="Encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation"></a>

```csharp
public string Encapsulation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeeringLocation`<sup>Required</sup> <a name="PeeringLocation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation"></a>

```csharp
public string PeeringLocation { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRoutePortConfig <a name="ExpressRoutePortConfig" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePortConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double BandwidthInGbps,
    string Encapsulation,
    string Location,
    string Name,
    string PeeringLocation,
    string ResourceGroupName,
    string BillingType = null,
    string Id = null,
    ExpressRoutePortIdentity Identity = null,
    ExpressRoutePortLink1 Link1 = null,
    ExpressRoutePortLink2 Link2 = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ExpressRoutePortTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps">BandwidthInGbps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation">Encapsulation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#location ExpressRoutePort#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#name ExpressRoutePort#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation">PeeringLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType">BillingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#id ExpressRoutePort#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1">Link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | link1 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2">Link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | link2 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BandwidthInGbps`<sup>Required</sup> <a name="BandwidthInGbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps"></a>

```csharp
public double BandwidthInGbps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}.

---

##### `Encapsulation`<sup>Required</sup> <a name="Encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation"></a>

```csharp
public string Encapsulation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#location ExpressRoutePort#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#name ExpressRoutePort#name}.

---

##### `PeeringLocation`<sup>Required</sup> <a name="PeeringLocation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation"></a>

```csharp
public string PeeringLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}.

---

##### `BillingType`<sup>Optional</sup> <a name="BillingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType"></a>

```csharp
public string BillingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#id ExpressRoutePort#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity"></a>

```csharp
public ExpressRoutePortIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#identity ExpressRoutePort#identity}

---

##### `Link1`<sup>Optional</sup> <a name="Link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1"></a>

```csharp
public ExpressRoutePortLink1 Link1 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

link1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#link1 ExpressRoutePort#link1}

---

##### `Link2`<sup>Optional</sup> <a name="Link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2"></a>

```csharp
public ExpressRoutePortLink2 Link2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

link2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#link2 ExpressRoutePort#link2}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts"></a>

```csharp
public ExpressRoutePortTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#timeouts ExpressRoutePort#timeouts}

---

### ExpressRoutePortIdentity <a name="ExpressRoutePortIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePortIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#type ExpressRoutePort#type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#type ExpressRoutePort#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}.

---

### ExpressRoutePortLink1 <a name="ExpressRoutePortLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePortLink1 {
    object AdminEnabled = null,
    string MacsecCakKeyvaultSecretId = null,
    string MacsecCipher = null,
    string MacsecCknKeyvaultSecretId = null,
    object MacsecSciEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled">AdminEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId">MacsecCakKeyvaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher">MacsecCipher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId">MacsecCknKeyvaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled">MacsecSciEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled"></a>

```csharp
public object AdminEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `MacsecCakKeyvaultSecretId`<sup>Optional</sup> <a name="MacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId"></a>

```csharp
public string MacsecCakKeyvaultSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `MacsecCipher`<sup>Optional</sup> <a name="MacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher"></a>

```csharp
public string MacsecCipher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `MacsecCknKeyvaultSecretId`<sup>Optional</sup> <a name="MacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId"></a>

```csharp
public string MacsecCknKeyvaultSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `MacsecSciEnabled`<sup>Optional</sup> <a name="MacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled"></a>

```csharp
public object MacsecSciEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortLink2 <a name="ExpressRoutePortLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePortLink2 {
    object AdminEnabled = null,
    string MacsecCakKeyvaultSecretId = null,
    string MacsecCipher = null,
    string MacsecCknKeyvaultSecretId = null,
    object MacsecSciEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled">AdminEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId">MacsecCakKeyvaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher">MacsecCipher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId">MacsecCknKeyvaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled">MacsecSciEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled"></a>

```csharp
public object AdminEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `MacsecCakKeyvaultSecretId`<sup>Optional</sup> <a name="MacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId"></a>

```csharp
public string MacsecCakKeyvaultSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `MacsecCipher`<sup>Optional</sup> <a name="MacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher"></a>

```csharp
public string MacsecCipher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `MacsecCknKeyvaultSecretId`<sup>Optional</sup> <a name="MacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId"></a>

```csharp
public string MacsecCknKeyvaultSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `MacsecSciEnabled`<sup>Optional</sup> <a name="MacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled"></a>

```csharp
public object MacsecSciEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortTimeouts <a name="ExpressRoutePortTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePortTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#create ExpressRoutePort#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#read ExpressRoutePort#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#update ExpressRoutePort#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#create ExpressRoutePort#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#read ExpressRoutePort#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/express_route_port#update ExpressRoutePort#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRoutePortIdentityOutputReference <a name="ExpressRoutePortIdentityOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePortIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue"></a>

```csharp
public ExpressRoutePortIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---


### ExpressRoutePortLink1OutputReference <a name="ExpressRoutePortLink1OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePortLink1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId">ResetMacsecCakKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher">ResetMacsecCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId">ResetMacsecCknKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled">ResetMacsecSciEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled"></a>

```csharp
private void ResetAdminEnabled()
```

##### `ResetMacsecCakKeyvaultSecretId` <a name="ResetMacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```csharp
private void ResetMacsecCakKeyvaultSecretId()
```

##### `ResetMacsecCipher` <a name="ResetMacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher"></a>

```csharp
private void ResetMacsecCipher()
```

##### `ResetMacsecCknKeyvaultSecretId` <a name="ResetMacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```csharp
private void ResetMacsecCknKeyvaultSecretId()
```

##### `ResetMacsecSciEnabled` <a name="ResetMacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled"></a>

```csharp
private void ResetMacsecSciEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId">PatchPanelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId">RackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName">RouterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput">MacsecCakKeyvaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput">MacsecCipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput">MacsecCknKeyvaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput">MacsecSciEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled">AdminEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId">MacsecCakKeyvaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher">MacsecCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId">MacsecCknKeyvaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled">MacsecSciEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `PatchPanelId`<sup>Required</sup> <a name="PatchPanelId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId"></a>

```csharp
public string PatchPanelId { get; }
```

- *Type:* string

---

##### `RackId`<sup>Required</sup> <a name="RackId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId"></a>

```csharp
public string RackId { get; }
```

- *Type:* string

---

##### `RouterName`<sup>Required</sup> <a name="RouterName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName"></a>

```csharp
public string RouterName { get; }
```

- *Type:* string

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput"></a>

```csharp
public object AdminEnabledInput { get; }
```

- *Type:* object

---

##### `MacsecCakKeyvaultSecretIdInput`<sup>Optional</sup> <a name="MacsecCakKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```csharp
public string MacsecCakKeyvaultSecretIdInput { get; }
```

- *Type:* string

---

##### `MacsecCipherInput`<sup>Optional</sup> <a name="MacsecCipherInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput"></a>

```csharp
public string MacsecCipherInput { get; }
```

- *Type:* string

---

##### `MacsecCknKeyvaultSecretIdInput`<sup>Optional</sup> <a name="MacsecCknKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```csharp
public string MacsecCknKeyvaultSecretIdInput { get; }
```

- *Type:* string

---

##### `MacsecSciEnabledInput`<sup>Optional</sup> <a name="MacsecSciEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput"></a>

```csharp
public object MacsecSciEnabledInput { get; }
```

- *Type:* object

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled"></a>

```csharp
public object AdminEnabled { get; }
```

- *Type:* object

---

##### `MacsecCakKeyvaultSecretId`<sup>Required</sup> <a name="MacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId"></a>

```csharp
public string MacsecCakKeyvaultSecretId { get; }
```

- *Type:* string

---

##### `MacsecCipher`<sup>Required</sup> <a name="MacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher"></a>

```csharp
public string MacsecCipher { get; }
```

- *Type:* string

---

##### `MacsecCknKeyvaultSecretId`<sup>Required</sup> <a name="MacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId"></a>

```csharp
public string MacsecCknKeyvaultSecretId { get; }
```

- *Type:* string

---

##### `MacsecSciEnabled`<sup>Required</sup> <a name="MacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled"></a>

```csharp
public object MacsecSciEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue"></a>

```csharp
public ExpressRoutePortLink1 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---


### ExpressRoutePortLink2OutputReference <a name="ExpressRoutePortLink2OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePortLink2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId">ResetMacsecCakKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher">ResetMacsecCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId">ResetMacsecCknKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled">ResetMacsecSciEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled"></a>

```csharp
private void ResetAdminEnabled()
```

##### `ResetMacsecCakKeyvaultSecretId` <a name="ResetMacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```csharp
private void ResetMacsecCakKeyvaultSecretId()
```

##### `ResetMacsecCipher` <a name="ResetMacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher"></a>

```csharp
private void ResetMacsecCipher()
```

##### `ResetMacsecCknKeyvaultSecretId` <a name="ResetMacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```csharp
private void ResetMacsecCknKeyvaultSecretId()
```

##### `ResetMacsecSciEnabled` <a name="ResetMacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled"></a>

```csharp
private void ResetMacsecSciEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId">PatchPanelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId">RackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName">RouterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput">MacsecCakKeyvaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput">MacsecCipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput">MacsecCknKeyvaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput">MacsecSciEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled">AdminEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId">MacsecCakKeyvaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher">MacsecCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId">MacsecCknKeyvaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled">MacsecSciEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `PatchPanelId`<sup>Required</sup> <a name="PatchPanelId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId"></a>

```csharp
public string PatchPanelId { get; }
```

- *Type:* string

---

##### `RackId`<sup>Required</sup> <a name="RackId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId"></a>

```csharp
public string RackId { get; }
```

- *Type:* string

---

##### `RouterName`<sup>Required</sup> <a name="RouterName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName"></a>

```csharp
public string RouterName { get; }
```

- *Type:* string

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput"></a>

```csharp
public object AdminEnabledInput { get; }
```

- *Type:* object

---

##### `MacsecCakKeyvaultSecretIdInput`<sup>Optional</sup> <a name="MacsecCakKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```csharp
public string MacsecCakKeyvaultSecretIdInput { get; }
```

- *Type:* string

---

##### `MacsecCipherInput`<sup>Optional</sup> <a name="MacsecCipherInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput"></a>

```csharp
public string MacsecCipherInput { get; }
```

- *Type:* string

---

##### `MacsecCknKeyvaultSecretIdInput`<sup>Optional</sup> <a name="MacsecCknKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```csharp
public string MacsecCknKeyvaultSecretIdInput { get; }
```

- *Type:* string

---

##### `MacsecSciEnabledInput`<sup>Optional</sup> <a name="MacsecSciEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput"></a>

```csharp
public object MacsecSciEnabledInput { get; }
```

- *Type:* object

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled"></a>

```csharp
public object AdminEnabled { get; }
```

- *Type:* object

---

##### `MacsecCakKeyvaultSecretId`<sup>Required</sup> <a name="MacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId"></a>

```csharp
public string MacsecCakKeyvaultSecretId { get; }
```

- *Type:* string

---

##### `MacsecCipher`<sup>Required</sup> <a name="MacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher"></a>

```csharp
public string MacsecCipher { get; }
```

- *Type:* string

---

##### `MacsecCknKeyvaultSecretId`<sup>Required</sup> <a name="MacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId"></a>

```csharp
public string MacsecCknKeyvaultSecretId { get; }
```

- *Type:* string

---

##### `MacsecSciEnabled`<sup>Required</sup> <a name="MacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled"></a>

```csharp
public object MacsecSciEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue"></a>

```csharp
public ExpressRoutePortLink2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---


### ExpressRoutePortTimeoutsOutputReference <a name="ExpressRoutePortTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRoutePortTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



