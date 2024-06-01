# `eventhubNamespaceDisasterRecoveryConfig` Submodule <a name="`eventhubNamespaceDisasterRecoveryConfig` Submodule" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespaceDisasterRecoveryConfig <a name="EventhubNamespaceDisasterRecoveryConfig" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config azurerm_eventhub_namespace_disaster_recovery_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventhubNamespaceDisasterRecoveryConfig(Construct Scope, string Id, EventhubNamespaceDisasterRecoveryConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig">EventhubNamespaceDisasterRecoveryConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig">EventhubNamespaceDisasterRecoveryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(EventhubNamespaceDisasterRecoveryConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts">EventhubNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventhubNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventhubNamespaceDisasterRecoveryConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventhubNamespaceDisasterRecoveryConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventhubNamespaceDisasterRecoveryConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventhubNamespaceDisasterRecoveryConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventhubNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventhubNamespaceDisasterRecoveryConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventhubNamespaceDisasterRecoveryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventhubNamespaceDisasterRecoveryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference">EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput">PartnerNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.partnerNamespaceId">PartnerNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.timeouts"></a>

```csharp
public EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference">EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `PartnerNamespaceIdInput`<sup>Optional</sup> <a name="PartnerNamespaceIdInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput"></a>

```csharp
public string PartnerNamespaceIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `PartnerNamespaceId`<sup>Required</sup> <a name="PartnerNamespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.partnerNamespaceId"></a>

```csharp
public string PartnerNamespaceId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceDisasterRecoveryConfigConfig <a name="EventhubNamespaceDisasterRecoveryConfigConfig" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventhubNamespaceDisasterRecoveryConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NamespaceName,
    string PartnerNamespaceId,
    string ResourceGroupName,
    string Id = null,
    EventhubNamespaceDisasterRecoveryConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#name EventhubNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#namespace_name EventhubNamespaceDisasterRecoveryConfig#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId">PartnerNamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#partner_namespace_id EventhubNamespaceDisasterRecoveryConfig#partner_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#resource_group_name EventhubNamespaceDisasterRecoveryConfig#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#id EventhubNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts">EventhubNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#name EventhubNamespaceDisasterRecoveryConfig#name}.

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#namespace_name EventhubNamespaceDisasterRecoveryConfig#namespace_name}.

---

##### `PartnerNamespaceId`<sup>Required</sup> <a name="PartnerNamespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId"></a>

```csharp
public string PartnerNamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#partner_namespace_id EventhubNamespaceDisasterRecoveryConfig#partner_namespace_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#resource_group_name EventhubNamespaceDisasterRecoveryConfig#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#id EventhubNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigConfig.property.timeouts"></a>

```csharp
public EventhubNamespaceDisasterRecoveryConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts">EventhubNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#timeouts EventhubNamespaceDisasterRecoveryConfig#timeouts}

---

### EventhubNamespaceDisasterRecoveryConfigTimeouts <a name="EventhubNamespaceDisasterRecoveryConfigTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventhubNamespaceDisasterRecoveryConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#create EventhubNamespaceDisasterRecoveryConfig#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#delete EventhubNamespaceDisasterRecoveryConfig#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#read EventhubNamespaceDisasterRecoveryConfig#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#update EventhubNamespaceDisasterRecoveryConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#create EventhubNamespaceDisasterRecoveryConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#delete EventhubNamespaceDisasterRecoveryConfig#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#read EventhubNamespaceDisasterRecoveryConfig#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/eventhub_namespace_disaster_recovery_config#update EventhubNamespaceDisasterRecoveryConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference <a name="EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventhubNamespaceDisasterRecoveryConfig.EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



