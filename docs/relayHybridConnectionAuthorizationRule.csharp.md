# `relayHybridConnectionAuthorizationRule` Submodule <a name="`relayHybridConnectionAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RelayHybridConnectionAuthorizationRule <a name="RelayHybridConnectionAuthorizationRule" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule azurerm_relay_hybrid_connection_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RelayHybridConnectionAuthorizationRule(Construct Scope, string Id, RelayHybridConnectionAuthorizationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig">RelayHybridConnectionAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig">RelayHybridConnectionAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetListen">ResetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetManage">ResetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetSend">ResetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.putTimeouts"></a>

```csharp
private void PutTimeouts(RelayHybridConnectionAuthorizationRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetListen` <a name="ResetListen" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetListen"></a>

```csharp
private void ResetListen()
```

##### `ResetManage` <a name="ResetManage" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetManage"></a>

```csharp
private void ResetManage()
```

##### `ResetSend` <a name="ResetSend" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetSend"></a>

```csharp
private void ResetSend()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RelayHybridConnectionAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RelayHybridConnectionAuthorizationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RelayHybridConnectionAuthorizationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RelayHybridConnectionAuthorizationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RelayHybridConnectionAuthorizationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RelayHybridConnectionAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RelayHybridConnectionAuthorizationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RelayHybridConnectionAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RelayHybridConnectionAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference">RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.hybridConnectionNameInput">HybridConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.listenInput">ListenInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.manageInput">ManageInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.sendInput">SendInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.hybridConnectionName">HybridConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.listen">Listen</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.manage">Manage</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.send">Send</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.timeouts"></a>

```csharp
public RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference">RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference</a>

---

##### `HybridConnectionNameInput`<sup>Optional</sup> <a name="HybridConnectionNameInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.hybridConnectionNameInput"></a>

```csharp
public string HybridConnectionNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenInput`<sup>Optional</sup> <a name="ListenInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.listenInput"></a>

```csharp
public bool|IResolvable ListenInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ManageInput`<sup>Optional</sup> <a name="ManageInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.manageInput"></a>

```csharp
public bool|IResolvable ManageInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SendInput`<sup>Optional</sup> <a name="SendInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.sendInput"></a>

```csharp
public bool|IResolvable SendInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.timeoutsInput"></a>

```csharp
public IResolvable|RelayHybridConnectionAuthorizationRuleTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a>

---

##### `HybridConnectionName`<sup>Required</sup> <a name="HybridConnectionName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.hybridConnectionName"></a>

```csharp
public string HybridConnectionName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Listen`<sup>Required</sup> <a name="Listen" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.listen"></a>

```csharp
public bool|IResolvable Listen { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Manage`<sup>Required</sup> <a name="Manage" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.manage"></a>

```csharp
public bool|IResolvable Manage { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Send`<sup>Required</sup> <a name="Send" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.send"></a>

```csharp
public bool|IResolvable Send { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RelayHybridConnectionAuthorizationRuleConfig <a name="RelayHybridConnectionAuthorizationRuleConfig" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RelayHybridConnectionAuthorizationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string HybridConnectionName,
    string Name,
    string NamespaceName,
    string ResourceGroupName,
    string Id = null,
    bool|IResolvable Listen = null,
    bool|IResolvable Manage = null,
    bool|IResolvable Send = null,
    RelayHybridConnectionAuthorizationRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.hybridConnectionName">HybridConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#hybrid_connection_name RelayHybridConnectionAuthorizationRule#hybrid_connection_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#name RelayHybridConnectionAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#namespace_name RelayHybridConnectionAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#resource_group_name RelayHybridConnectionAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#id RelayHybridConnectionAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.listen">Listen</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#listen RelayHybridConnectionAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.manage">Manage</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#manage RelayHybridConnectionAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.send">Send</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#send RelayHybridConnectionAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `HybridConnectionName`<sup>Required</sup> <a name="HybridConnectionName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.hybridConnectionName"></a>

```csharp
public string HybridConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#hybrid_connection_name RelayHybridConnectionAuthorizationRule#hybrid_connection_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#name RelayHybridConnectionAuthorizationRule#name}.

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#namespace_name RelayHybridConnectionAuthorizationRule#namespace_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#resource_group_name RelayHybridConnectionAuthorizationRule#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#id RelayHybridConnectionAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Listen`<sup>Optional</sup> <a name="Listen" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.listen"></a>

```csharp
public bool|IResolvable Listen { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#listen RelayHybridConnectionAuthorizationRule#listen}.

---

##### `Manage`<sup>Optional</sup> <a name="Manage" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.manage"></a>

```csharp
public bool|IResolvable Manage { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#manage RelayHybridConnectionAuthorizationRule#manage}.

---

##### `Send`<sup>Optional</sup> <a name="Send" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.send"></a>

```csharp
public bool|IResolvable Send { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#send RelayHybridConnectionAuthorizationRule#send}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleConfig.property.timeouts"></a>

```csharp
public RelayHybridConnectionAuthorizationRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#timeouts RelayHybridConnectionAuthorizationRule#timeouts}

---

### RelayHybridConnectionAuthorizationRuleTimeouts <a name="RelayHybridConnectionAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RelayHybridConnectionAuthorizationRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#create RelayHybridConnectionAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#delete RelayHybridConnectionAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#read RelayHybridConnectionAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#update RelayHybridConnectionAuthorizationRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#create RelayHybridConnectionAuthorizationRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#delete RelayHybridConnectionAuthorizationRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#read RelayHybridConnectionAuthorizationRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/relay_hybrid_connection_authorization_rule#update RelayHybridConnectionAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference <a name="RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RelayHybridConnectionAuthorizationRuleTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.relayHybridConnectionAuthorizationRule.RelayHybridConnectionAuthorizationRuleTimeouts">RelayHybridConnectionAuthorizationRuleTimeouts</a>

---



