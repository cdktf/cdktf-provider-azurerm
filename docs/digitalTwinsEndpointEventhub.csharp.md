# `digitalTwinsEndpointEventhub` Submodule <a name="`digitalTwinsEndpointEventhub` Submodule" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointEventhub <a name="DigitalTwinsEndpointEventhub" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub azurerm_digital_twins_endpoint_eventhub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsEndpointEventhub(Construct Scope, string Id, DigitalTwinsEndpointEventhubConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig">DigitalTwinsEndpointEventhubConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig">DigitalTwinsEndpointEventhubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetDeadLetterStorageSecret">ResetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.putTimeouts"></a>

```csharp
private void PutTimeouts(DigitalTwinsEndpointEventhubTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a>

---

##### `ResetDeadLetterStorageSecret` <a name="ResetDeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetDeadLetterStorageSecret"></a>

```csharp
private void ResetDeadLetterStorageSecret()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DigitalTwinsEndpointEventhub resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsEndpointEventhub.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsEndpointEventhub.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsEndpointEventhub.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsEndpointEventhub.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DigitalTwinsEndpointEventhub resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DigitalTwinsEndpointEventhub to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DigitalTwinsEndpointEventhub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DigitalTwinsEndpointEventhub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference">DigitalTwinsEndpointEventhubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.deadLetterStorageSecretInput">DeadLetterStorageSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.digitalTwinsIdInput">DigitalTwinsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubPrimaryConnectionStringInput">EventhubPrimaryConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubSecondaryConnectionStringInput">EventhubSecondaryConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubPrimaryConnectionString">EventhubPrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubSecondaryConnectionString">EventhubSecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.timeouts"></a>

```csharp
public DigitalTwinsEndpointEventhubTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference">DigitalTwinsEndpointEventhubTimeoutsOutputReference</a>

---

##### `DeadLetterStorageSecretInput`<sup>Optional</sup> <a name="DeadLetterStorageSecretInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.deadLetterStorageSecretInput"></a>

```csharp
public string DeadLetterStorageSecretInput { get; }
```

- *Type:* string

---

##### `DigitalTwinsIdInput`<sup>Optional</sup> <a name="DigitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.digitalTwinsIdInput"></a>

```csharp
public string DigitalTwinsIdInput { get; }
```

- *Type:* string

---

##### `EventhubPrimaryConnectionStringInput`<sup>Optional</sup> <a name="EventhubPrimaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubPrimaryConnectionStringInput"></a>

```csharp
public string EventhubPrimaryConnectionStringInput { get; }
```

- *Type:* string

---

##### `EventhubSecondaryConnectionStringInput`<sup>Optional</sup> <a name="EventhubSecondaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubSecondaryConnectionStringInput"></a>

```csharp
public string EventhubSecondaryConnectionStringInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeadLetterStorageSecret`<sup>Required</sup> <a name="DeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.deadLetterStorageSecret"></a>

```csharp
public string DeadLetterStorageSecret { get; }
```

- *Type:* string

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.digitalTwinsId"></a>

```csharp
public string DigitalTwinsId { get; }
```

- *Type:* string

---

##### `EventhubPrimaryConnectionString`<sup>Required</sup> <a name="EventhubPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubPrimaryConnectionString"></a>

```csharp
public string EventhubPrimaryConnectionString { get; }
```

- *Type:* string

---

##### `EventhubSecondaryConnectionString`<sup>Required</sup> <a name="EventhubSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubSecondaryConnectionString"></a>

```csharp
public string EventhubSecondaryConnectionString { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointEventhubConfig <a name="DigitalTwinsEndpointEventhubConfig" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsEndpointEventhubConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DigitalTwinsId,
    string EventhubPrimaryConnectionString,
    string EventhubSecondaryConnectionString,
    string Name,
    string DeadLetterStorageSecret = null,
    string Id = null,
    DigitalTwinsEndpointEventhubTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#digital_twins_id DigitalTwinsEndpointEventhub#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.eventhubPrimaryConnectionString">EventhubPrimaryConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_primary_connection_string DigitalTwinsEndpointEventhub#eventhub_primary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.eventhubSecondaryConnectionString">EventhubSecondaryConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_secondary_connection_string DigitalTwinsEndpointEventhub#eventhub_secondary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#name DigitalTwinsEndpointEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#dead_letter_storage_secret DigitalTwinsEndpointEventhub#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#id DigitalTwinsEndpointEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.digitalTwinsId"></a>

```csharp
public string DigitalTwinsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#digital_twins_id DigitalTwinsEndpointEventhub#digital_twins_id}.

---

##### `EventhubPrimaryConnectionString`<sup>Required</sup> <a name="EventhubPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.eventhubPrimaryConnectionString"></a>

```csharp
public string EventhubPrimaryConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_primary_connection_string DigitalTwinsEndpointEventhub#eventhub_primary_connection_string}.

---

##### `EventhubSecondaryConnectionString`<sup>Required</sup> <a name="EventhubSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.eventhubSecondaryConnectionString"></a>

```csharp
public string EventhubSecondaryConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_secondary_connection_string DigitalTwinsEndpointEventhub#eventhub_secondary_connection_string}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#name DigitalTwinsEndpointEventhub#name}.

---

##### `DeadLetterStorageSecret`<sup>Optional</sup> <a name="DeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.deadLetterStorageSecret"></a>

```csharp
public string DeadLetterStorageSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#dead_letter_storage_secret DigitalTwinsEndpointEventhub#dead_letter_storage_secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#id DigitalTwinsEndpointEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.timeouts"></a>

```csharp
public DigitalTwinsEndpointEventhubTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#timeouts DigitalTwinsEndpointEventhub#timeouts}

---

### DigitalTwinsEndpointEventhubTimeouts <a name="DigitalTwinsEndpointEventhubTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsEndpointEventhubTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#create DigitalTwinsEndpointEventhub#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#delete DigitalTwinsEndpointEventhub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#read DigitalTwinsEndpointEventhub#read}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#update DigitalTwinsEndpointEventhub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#create DigitalTwinsEndpointEventhub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#delete DigitalTwinsEndpointEventhub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#read DigitalTwinsEndpointEventhub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/digital_twins_endpoint_eventhub#update DigitalTwinsEndpointEventhub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointEventhubTimeoutsOutputReference <a name="DigitalTwinsEndpointEventhubTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsEndpointEventhubTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



