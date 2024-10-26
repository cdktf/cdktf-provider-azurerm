# `digitalTwinsEndpointServicebus` Submodule <a name="`digitalTwinsEndpointServicebus` Submodule" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointServicebus <a name="DigitalTwinsEndpointServicebus" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus azurerm_digital_twins_endpoint_servicebus}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsEndpointServicebus(Construct Scope, string Id, DigitalTwinsEndpointServicebusConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig">DigitalTwinsEndpointServicebusConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig">DigitalTwinsEndpointServicebusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetDeadLetterStorageSecret">ResetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts"></a>

```csharp
private void PutTimeouts(DigitalTwinsEndpointServicebusTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

---

##### `ResetDeadLetterStorageSecret` <a name="ResetDeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetDeadLetterStorageSecret"></a>

```csharp
private void ResetDeadLetterStorageSecret()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DigitalTwinsEndpointServicebus resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsEndpointServicebus.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsEndpointServicebus.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsEndpointServicebus.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsEndpointServicebus.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DigitalTwinsEndpointServicebus resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DigitalTwinsEndpointServicebus to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DigitalTwinsEndpointServicebus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DigitalTwinsEndpointServicebus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference">DigitalTwinsEndpointServicebusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecretInput">DeadLetterStorageSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsIdInput">DigitalTwinsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionStringInput">ServicebusPrimaryConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionStringInput">ServicebusSecondaryConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionString">ServicebusPrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionString">ServicebusSecondaryConnectionString</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeouts"></a>

```csharp
public DigitalTwinsEndpointServicebusTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference">DigitalTwinsEndpointServicebusTimeoutsOutputReference</a>

---

##### `DeadLetterStorageSecretInput`<sup>Optional</sup> <a name="DeadLetterStorageSecretInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecretInput"></a>

```csharp
public string DeadLetterStorageSecretInput { get; }
```

- *Type:* string

---

##### `DigitalTwinsIdInput`<sup>Optional</sup> <a name="DigitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsIdInput"></a>

```csharp
public string DigitalTwinsIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServicebusPrimaryConnectionStringInput`<sup>Optional</sup> <a name="ServicebusPrimaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionStringInput"></a>

```csharp
public string ServicebusPrimaryConnectionStringInput { get; }
```

- *Type:* string

---

##### `ServicebusSecondaryConnectionStringInput`<sup>Optional</sup> <a name="ServicebusSecondaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionStringInput"></a>

```csharp
public string ServicebusSecondaryConnectionStringInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeadLetterStorageSecret`<sup>Required</sup> <a name="DeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecret"></a>

```csharp
public string DeadLetterStorageSecret { get; }
```

- *Type:* string

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsId"></a>

```csharp
public string DigitalTwinsId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServicebusPrimaryConnectionString`<sup>Required</sup> <a name="ServicebusPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionString"></a>

```csharp
public string ServicebusPrimaryConnectionString { get; }
```

- *Type:* string

---

##### `ServicebusSecondaryConnectionString`<sup>Required</sup> <a name="ServicebusSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionString"></a>

```csharp
public string ServicebusSecondaryConnectionString { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointServicebusConfig <a name="DigitalTwinsEndpointServicebusConfig" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsEndpointServicebusConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DigitalTwinsId,
    string Name,
    string ServicebusPrimaryConnectionString,
    string ServicebusSecondaryConnectionString,
    string DeadLetterStorageSecret = null,
    string Id = null,
    DigitalTwinsEndpointServicebusTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusPrimaryConnectionString">ServicebusPrimaryConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusSecondaryConnectionString">ServicebusSecondaryConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.digitalTwinsId"></a>

```csharp
public string DigitalTwinsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}.

---

##### `ServicebusPrimaryConnectionString`<sup>Required</sup> <a name="ServicebusPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusPrimaryConnectionString"></a>

```csharp
public string ServicebusPrimaryConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}.

---

##### `ServicebusSecondaryConnectionString`<sup>Required</sup> <a name="ServicebusSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusSecondaryConnectionString"></a>

```csharp
public string ServicebusSecondaryConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}.

---

##### `DeadLetterStorageSecret`<sup>Optional</sup> <a name="DeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.deadLetterStorageSecret"></a>

```csharp
public string DeadLetterStorageSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.timeouts"></a>

```csharp
public DigitalTwinsEndpointServicebusTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#timeouts DigitalTwinsEndpointServicebus#timeouts}

---

### DigitalTwinsEndpointServicebusTimeouts <a name="DigitalTwinsEndpointServicebusTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsEndpointServicebusTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#create DigitalTwinsEndpointServicebus#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#delete DigitalTwinsEndpointServicebus#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#read DigitalTwinsEndpointServicebus#read}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#update DigitalTwinsEndpointServicebus#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#create DigitalTwinsEndpointServicebus#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#delete DigitalTwinsEndpointServicebus#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#read DigitalTwinsEndpointServicebus#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/digital_twins_endpoint_servicebus#update DigitalTwinsEndpointServicebus#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointServicebusTimeoutsOutputReference <a name="DigitalTwinsEndpointServicebusTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsEndpointServicebusTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



