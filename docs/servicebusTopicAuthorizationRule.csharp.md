# `servicebusTopicAuthorizationRule` Submodule <a name="`servicebusTopicAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusTopicAuthorizationRule <a name="ServicebusTopicAuthorizationRule" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule azurerm_servicebus_topic_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusTopicAuthorizationRule(Construct Scope, string Id, ServicebusTopicAuthorizationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig">ServicebusTopicAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig">ServicebusTopicAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetListen">ResetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetManage">ResetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetSend">ResetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicebusTopicAuthorizationRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts">ServicebusTopicAuthorizationRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetListen` <a name="ResetListen" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetListen"></a>

```csharp
private void ResetListen()
```

##### `ResetManage` <a name="ResetManage" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetManage"></a>

```csharp
private void ResetManage()
```

##### `ResetSend` <a name="ResetSend" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetSend"></a>

```csharp
private void ResetSend()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusTopicAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusTopicAuthorizationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusTopicAuthorizationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusTopicAuthorizationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusTopicAuthorizationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServicebusTopicAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusTopicAuthorizationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusTopicAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusTopicAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.primaryConnectionStringAlias">PrimaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.secondaryConnectionStringAlias">SecondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference">ServicebusTopicAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.listenInput">ListenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.manageInput">ManageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.sendInput">SendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.topicIdInput">TopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.listen">Listen</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.manage">Manage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.send">Send</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.topicId">TopicId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryConnectionStringAlias`<sup>Required</sup> <a name="PrimaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.primaryConnectionStringAlias"></a>

```csharp
public string PrimaryConnectionStringAlias { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryConnectionStringAlias`<sup>Required</sup> <a name="SecondaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```csharp
public string SecondaryConnectionStringAlias { get; }
```

- *Type:* string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.timeouts"></a>

```csharp
public ServicebusTopicAuthorizationRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference">ServicebusTopicAuthorizationRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenInput`<sup>Optional</sup> <a name="ListenInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.listenInput"></a>

```csharp
public object ListenInput { get; }
```

- *Type:* object

---

##### `ManageInput`<sup>Optional</sup> <a name="ManageInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.manageInput"></a>

```csharp
public object ManageInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SendInput`<sup>Optional</sup> <a name="SendInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.sendInput"></a>

```csharp
public object SendInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.topicIdInput"></a>

```csharp
public string TopicIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Listen`<sup>Required</sup> <a name="Listen" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.listen"></a>

```csharp
public object Listen { get; }
```

- *Type:* object

---

##### `Manage`<sup>Required</sup> <a name="Manage" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.manage"></a>

```csharp
public object Manage { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Send`<sup>Required</sup> <a name="Send" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.send"></a>

```csharp
public object Send { get; }
```

- *Type:* object

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.topicId"></a>

```csharp
public string TopicId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusTopicAuthorizationRuleConfig <a name="ServicebusTopicAuthorizationRuleConfig" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusTopicAuthorizationRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string TopicId,
    string Id = null,
    object Listen = null,
    object Manage = null,
    object Send = null,
    ServicebusTopicAuthorizationRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#name ServicebusTopicAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.topicId">TopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#topic_id ServicebusTopicAuthorizationRule#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#id ServicebusTopicAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.listen">Listen</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#listen ServicebusTopicAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.manage">Manage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#manage ServicebusTopicAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.send">Send</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#send ServicebusTopicAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts">ServicebusTopicAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#name ServicebusTopicAuthorizationRule#name}.

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.topicId"></a>

```csharp
public string TopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#topic_id ServicebusTopicAuthorizationRule#topic_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#id ServicebusTopicAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Listen`<sup>Optional</sup> <a name="Listen" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.listen"></a>

```csharp
public object Listen { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#listen ServicebusTopicAuthorizationRule#listen}.

---

##### `Manage`<sup>Optional</sup> <a name="Manage" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.manage"></a>

```csharp
public object Manage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#manage ServicebusTopicAuthorizationRule#manage}.

---

##### `Send`<sup>Optional</sup> <a name="Send" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.send"></a>

```csharp
public object Send { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#send ServicebusTopicAuthorizationRule#send}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleConfig.property.timeouts"></a>

```csharp
public ServicebusTopicAuthorizationRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts">ServicebusTopicAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#timeouts ServicebusTopicAuthorizationRule#timeouts}

---

### ServicebusTopicAuthorizationRuleTimeouts <a name="ServicebusTopicAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusTopicAuthorizationRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#create ServicebusTopicAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#delete ServicebusTopicAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#read ServicebusTopicAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#update ServicebusTopicAuthorizationRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#create ServicebusTopicAuthorizationRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#delete ServicebusTopicAuthorizationRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#read ServicebusTopicAuthorizationRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_topic_authorization_rule#update ServicebusTopicAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusTopicAuthorizationRuleTimeoutsOutputReference <a name="ServicebusTopicAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusTopicAuthorizationRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusTopicAuthorizationRule.ServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



