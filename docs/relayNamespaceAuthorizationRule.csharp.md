# `relayNamespaceAuthorizationRule` Submodule <a name="`relayNamespaceAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RelayNamespaceAuthorizationRule <a name="RelayNamespaceAuthorizationRule" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule azurerm_relay_namespace_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RelayNamespaceAuthorizationRule(Construct Scope, string Id, RelayNamespaceAuthorizationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig">RelayNamespaceAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig">RelayNamespaceAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetListen">ResetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetManage">ResetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetSend">ResetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.putTimeouts"></a>

```csharp
private void PutTimeouts(RelayNamespaceAuthorizationRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts">RelayNamespaceAuthorizationRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetListen` <a name="ResetListen" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetListen"></a>

```csharp
private void ResetListen()
```

##### `ResetManage` <a name="ResetManage" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetManage"></a>

```csharp
private void ResetManage()
```

##### `ResetSend` <a name="ResetSend" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetSend"></a>

```csharp
private void ResetSend()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RelayNamespaceAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RelayNamespaceAuthorizationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RelayNamespaceAuthorizationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RelayNamespaceAuthorizationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RelayNamespaceAuthorizationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RelayNamespaceAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RelayNamespaceAuthorizationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RelayNamespaceAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RelayNamespaceAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference">RelayNamespaceAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.listenInput">ListenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.manageInput">ManageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.sendInput">SendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.listen">Listen</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.manage">Manage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.send">Send</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.timeouts"></a>

```csharp
public RelayNamespaceAuthorizationRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference">RelayNamespaceAuthorizationRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenInput`<sup>Optional</sup> <a name="ListenInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.listenInput"></a>

```csharp
public object ListenInput { get; }
```

- *Type:* object

---

##### `ManageInput`<sup>Optional</sup> <a name="ManageInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.manageInput"></a>

```csharp
public object ManageInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SendInput`<sup>Optional</sup> <a name="SendInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.sendInput"></a>

```csharp
public object SendInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Listen`<sup>Required</sup> <a name="Listen" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.listen"></a>

```csharp
public object Listen { get; }
```

- *Type:* object

---

##### `Manage`<sup>Required</sup> <a name="Manage" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.manage"></a>

```csharp
public object Manage { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Send`<sup>Required</sup> <a name="Send" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.send"></a>

```csharp
public object Send { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RelayNamespaceAuthorizationRuleConfig <a name="RelayNamespaceAuthorizationRuleConfig" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RelayNamespaceAuthorizationRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NamespaceName,
    string ResourceGroupName,
    string Id = null,
    object Listen = null,
    object Manage = null,
    object Send = null,
    RelayNamespaceAuthorizationRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#name RelayNamespaceAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#namespace_name RelayNamespaceAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#resource_group_name RelayNamespaceAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#id RelayNamespaceAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.listen">Listen</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#listen RelayNamespaceAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.manage">Manage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#manage RelayNamespaceAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.send">Send</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#send RelayNamespaceAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts">RelayNamespaceAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#name RelayNamespaceAuthorizationRule#name}.

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#namespace_name RelayNamespaceAuthorizationRule#namespace_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#resource_group_name RelayNamespaceAuthorizationRule#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#id RelayNamespaceAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Listen`<sup>Optional</sup> <a name="Listen" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.listen"></a>

```csharp
public object Listen { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#listen RelayNamespaceAuthorizationRule#listen}.

---

##### `Manage`<sup>Optional</sup> <a name="Manage" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.manage"></a>

```csharp
public object Manage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#manage RelayNamespaceAuthorizationRule#manage}.

---

##### `Send`<sup>Optional</sup> <a name="Send" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.send"></a>

```csharp
public object Send { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#send RelayNamespaceAuthorizationRule#send}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.timeouts"></a>

```csharp
public RelayNamespaceAuthorizationRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts">RelayNamespaceAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#timeouts RelayNamespaceAuthorizationRule#timeouts}

---

### RelayNamespaceAuthorizationRuleTimeouts <a name="RelayNamespaceAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RelayNamespaceAuthorizationRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#create RelayNamespaceAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#delete RelayNamespaceAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#read RelayNamespaceAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#update RelayNamespaceAuthorizationRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#create RelayNamespaceAuthorizationRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#delete RelayNamespaceAuthorizationRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#read RelayNamespaceAuthorizationRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/relay_namespace_authorization_rule#update RelayNamespaceAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RelayNamespaceAuthorizationRuleTimeoutsOutputReference <a name="RelayNamespaceAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RelayNamespaceAuthorizationRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



