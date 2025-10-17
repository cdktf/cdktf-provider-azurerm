# `logicAppIntegrationAccountAssembly` Submodule <a name="`logicAppIntegrationAccountAssembly` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountAssembly <a name="LogicAppIntegrationAccountAssembly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly azurerm_logic_app_integration_account_assembly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAssembly(Construct Scope, string Id, LogicAppIntegrationAccountAssemblyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig">LogicAppIntegrationAccountAssemblyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig">LogicAppIntegrationAccountAssemblyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetAssemblyVersion">ResetAssemblyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContentLinkUri">ResetContentLinkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.putTimeouts"></a>

```csharp
private void PutTimeouts(LogicAppIntegrationAccountAssemblyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

---

##### `ResetAssemblyVersion` <a name="ResetAssemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetAssemblyVersion"></a>

```csharp
private void ResetAssemblyVersion()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentLinkUri` <a name="ResetContentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetContentLinkUri"></a>

```csharp
private void ResetContentLinkUri()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppIntegrationAccountAssembly resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppIntegrationAccountAssembly.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppIntegrationAccountAssembly.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppIntegrationAccountAssembly.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppIntegrationAccountAssembly.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogicAppIntegrationAccountAssembly resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogicAppIntegrationAccountAssembly to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogicAppIntegrationAccountAssembly that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppIntegrationAccountAssembly to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference">LogicAppIntegrationAccountAssemblyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyNameInput">AssemblyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersionInput">AssemblyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUriInput">ContentLinkUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountNameInput">IntegrationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyName">AssemblyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersion">AssemblyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUri">ContentLinkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountName">IntegrationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeouts"></a>

```csharp
public LogicAppIntegrationAccountAssemblyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference">LogicAppIntegrationAccountAssemblyTimeoutsOutputReference</a>

---

##### `AssemblyNameInput`<sup>Optional</sup> <a name="AssemblyNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyNameInput"></a>

```csharp
public string AssemblyNameInput { get; }
```

- *Type:* string

---

##### `AssemblyVersionInput`<sup>Optional</sup> <a name="AssemblyVersionInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersionInput"></a>

```csharp
public string AssemblyVersionInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentLinkUriInput`<sup>Optional</sup> <a name="ContentLinkUriInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUriInput"></a>

```csharp
public string ContentLinkUriInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationAccountNameInput`<sup>Optional</sup> <a name="IntegrationAccountNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountNameInput"></a>

```csharp
public string IntegrationAccountNameInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.timeoutsInput"></a>

```csharp
public IResolvable|LogicAppIntegrationAccountAssemblyTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

---

##### `AssemblyName`<sup>Required</sup> <a name="AssemblyName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyName"></a>

```csharp
public string AssemblyName { get; }
```

- *Type:* string

---

##### `AssemblyVersion`<sup>Required</sup> <a name="AssemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.assemblyVersion"></a>

```csharp
public string AssemblyVersion { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentLinkUri`<sup>Required</sup> <a name="ContentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.contentLinkUri"></a>

```csharp
public string ContentLinkUri { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationAccountName`<sup>Required</sup> <a name="IntegrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.integrationAccountName"></a>

```csharp
public string IntegrationAccountName { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssembly.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountAssemblyConfig <a name="LogicAppIntegrationAccountAssemblyConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAssemblyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssemblyName,
    string IntegrationAccountName,
    string Name,
    string ResourceGroupName,
    string AssemblyVersion = null,
    string Content = null,
    string ContentLinkUri = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    LogicAppIntegrationAccountAssemblyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyName">AssemblyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#assembly_name LogicAppIntegrationAccountAssembly#assembly_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.integrationAccountName">IntegrationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#integration_account_name LogicAppIntegrationAccountAssembly#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#name LogicAppIntegrationAccountAssembly#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#resource_group_name LogicAppIntegrationAccountAssembly#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyVersion">AssemblyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#assembly_version LogicAppIntegrationAccountAssembly#assembly_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#content LogicAppIntegrationAccountAssembly#content}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.contentLinkUri">ContentLinkUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#content_link_uri LogicAppIntegrationAccountAssembly#content_link_uri}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#id LogicAppIntegrationAccountAssembly#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#metadata LogicAppIntegrationAccountAssembly#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AssemblyName`<sup>Required</sup> <a name="AssemblyName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyName"></a>

```csharp
public string AssemblyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#assembly_name LogicAppIntegrationAccountAssembly#assembly_name}.

---

##### `IntegrationAccountName`<sup>Required</sup> <a name="IntegrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.integrationAccountName"></a>

```csharp
public string IntegrationAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#integration_account_name LogicAppIntegrationAccountAssembly#integration_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#name LogicAppIntegrationAccountAssembly#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#resource_group_name LogicAppIntegrationAccountAssembly#resource_group_name}.

---

##### `AssemblyVersion`<sup>Optional</sup> <a name="AssemblyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.assemblyVersion"></a>

```csharp
public string AssemblyVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#assembly_version LogicAppIntegrationAccountAssembly#assembly_version}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#content LogicAppIntegrationAccountAssembly#content}.

---

##### `ContentLinkUri`<sup>Optional</sup> <a name="ContentLinkUri" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.contentLinkUri"></a>

```csharp
public string ContentLinkUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#content_link_uri LogicAppIntegrationAccountAssembly#content_link_uri}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#id LogicAppIntegrationAccountAssembly#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#metadata LogicAppIntegrationAccountAssembly#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyConfig.property.timeouts"></a>

```csharp
public LogicAppIntegrationAccountAssemblyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#timeouts LogicAppIntegrationAccountAssembly#timeouts}

---

### LogicAppIntegrationAccountAssemblyTimeouts <a name="LogicAppIntegrationAccountAssemblyTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAssemblyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#create LogicAppIntegrationAccountAssembly#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#delete LogicAppIntegrationAccountAssembly#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#read LogicAppIntegrationAccountAssembly#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#update LogicAppIntegrationAccountAssembly#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#create LogicAppIntegrationAccountAssembly#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#delete LogicAppIntegrationAccountAssembly#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#read LogicAppIntegrationAccountAssembly#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/logic_app_integration_account_assembly#update LogicAppIntegrationAccountAssembly#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountAssemblyTimeoutsOutputReference <a name="LogicAppIntegrationAccountAssemblyTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppIntegrationAccountAssemblyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogicAppIntegrationAccountAssemblyTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAssembly.LogicAppIntegrationAccountAssemblyTimeouts">LogicAppIntegrationAccountAssemblyTimeouts</a>

---



