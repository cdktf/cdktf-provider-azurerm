# `iotcentralApplicationNetworkRuleSet` Submodule <a name="`iotcentralApplicationNetworkRuleSet` Submodule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotcentralApplicationNetworkRuleSet <a name="IotcentralApplicationNetworkRuleSet" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set azurerm_iotcentral_application_network_rule_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotcentralApplicationNetworkRuleSet(Construct Scope, string Id, IotcentralApplicationNetworkRuleSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig">IotcentralApplicationNetworkRuleSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig">IotcentralApplicationNetworkRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putIpRule">PutIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetApplyToDevice">ResetApplyToDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetIpRule">ResetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpRule` <a name="PutIpRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putIpRule"></a>

```csharp
private void PutIpRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putIpRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts"></a>

```csharp
private void PutTimeouts(IotcentralApplicationNetworkRuleSetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>

---

##### `ResetApplyToDevice` <a name="ResetApplyToDevice" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetApplyToDevice"></a>

```csharp
private void ResetApplyToDevice()
```

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetDefaultAction"></a>

```csharp
private void ResetDefaultAction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpRule` <a name="ResetIpRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetIpRule"></a>

```csharp
private void ResetIpRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IotcentralApplicationNetworkRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotcentralApplicationNetworkRuleSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotcentralApplicationNetworkRuleSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotcentralApplicationNetworkRuleSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotcentralApplicationNetworkRuleSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IotcentralApplicationNetworkRuleSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotcentralApplicationNetworkRuleSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotcentralApplicationNetworkRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IotcentralApplicationNetworkRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRule">IpRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList">IotcentralApplicationNetworkRuleSetIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference">IotcentralApplicationNetworkRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDeviceInput">ApplyToDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationIdInput">IotcentralApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRuleInput">IpRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDevice">ApplyToDevice</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationId">IotcentralApplicationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IpRule`<sup>Required</sup> <a name="IpRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRule"></a>

```csharp
public IotcentralApplicationNetworkRuleSetIpRuleList IpRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList">IotcentralApplicationNetworkRuleSetIpRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeouts"></a>

```csharp
public IotcentralApplicationNetworkRuleSetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference">IotcentralApplicationNetworkRuleSetTimeoutsOutputReference</a>

---

##### `ApplyToDeviceInput`<sup>Optional</sup> <a name="ApplyToDeviceInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDeviceInput"></a>

```csharp
public object ApplyToDeviceInput { get; }
```

- *Type:* object

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IotcentralApplicationIdInput`<sup>Optional</sup> <a name="IotcentralApplicationIdInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationIdInput"></a>

```csharp
public string IotcentralApplicationIdInput { get; }
```

- *Type:* string

---

##### `IpRuleInput`<sup>Optional</sup> <a name="IpRuleInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRuleInput"></a>

```csharp
public object IpRuleInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplyToDevice`<sup>Required</sup> <a name="ApplyToDevice" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDevice"></a>

```csharp
public object ApplyToDevice { get; }
```

- *Type:* object

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IotcentralApplicationId`<sup>Required</sup> <a name="IotcentralApplicationId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationId"></a>

```csharp
public string IotcentralApplicationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotcentralApplicationNetworkRuleSetConfig <a name="IotcentralApplicationNetworkRuleSetConfig" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotcentralApplicationNetworkRuleSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IotcentralApplicationId,
    object ApplyToDevice = null,
    string DefaultAction = null,
    string Id = null,
    object IpRule = null,
    IotcentralApplicationNetworkRuleSetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.iotcentralApplicationId">IotcentralApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.applyToDevice">ApplyToDevice</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.ipRule">IpRule</a></code> | <code>object</code> | ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IotcentralApplicationId`<sup>Required</sup> <a name="IotcentralApplicationId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.iotcentralApplicationId"></a>

```csharp
public string IotcentralApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}.

---

##### `ApplyToDevice`<sup>Optional</sup> <a name="ApplyToDevice" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.applyToDevice"></a>

```csharp
public object ApplyToDevice { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}.

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpRule`<sup>Optional</sup> <a name="IpRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.ipRule"></a>

```csharp
public object IpRule { get; set; }
```

- *Type:* object

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#ip_rule IotcentralApplicationNetworkRuleSet#ip_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.timeouts"></a>

```csharp
public IotcentralApplicationNetworkRuleSetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#timeouts IotcentralApplicationNetworkRuleSet#timeouts}

---

### IotcentralApplicationNetworkRuleSetIpRule <a name="IotcentralApplicationNetworkRuleSetIpRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotcentralApplicationNetworkRuleSetIpRule {
    string IpMask,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.ipMask">IpMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#ip_mask IotcentralApplicationNetworkRuleSet#ip_mask}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#name IotcentralApplicationNetworkRuleSet#name}. |

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.ipMask"></a>

```csharp
public string IpMask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#ip_mask IotcentralApplicationNetworkRuleSet#ip_mask}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#name IotcentralApplicationNetworkRuleSet#name}.

---

### IotcentralApplicationNetworkRuleSetTimeouts <a name="IotcentralApplicationNetworkRuleSetTimeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotcentralApplicationNetworkRuleSetTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#create IotcentralApplicationNetworkRuleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#delete IotcentralApplicationNetworkRuleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#read IotcentralApplicationNetworkRuleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#update IotcentralApplicationNetworkRuleSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#create IotcentralApplicationNetworkRuleSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#delete IotcentralApplicationNetworkRuleSet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#read IotcentralApplicationNetworkRuleSet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iotcentral_application_network_rule_set#update IotcentralApplicationNetworkRuleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotcentralApplicationNetworkRuleSetIpRuleList <a name="IotcentralApplicationNetworkRuleSetIpRuleList" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotcentralApplicationNetworkRuleSetIpRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.get"></a>

```csharp
private IotcentralApplicationNetworkRuleSetIpRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IotcentralApplicationNetworkRuleSetIpRuleOutputReference <a name="IotcentralApplicationNetworkRuleSetIpRuleOutputReference" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotcentralApplicationNetworkRuleSetIpRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMaskInput">IpMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMask">IpMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpMaskInput`<sup>Optional</sup> <a name="IpMaskInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMaskInput"></a>

```csharp
public string IpMaskInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMask"></a>

```csharp
public string IpMask { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IotcentralApplicationNetworkRuleSetTimeoutsOutputReference <a name="IotcentralApplicationNetworkRuleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotcentralApplicationNetworkRuleSetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



