# `servicebusNamespaceAuthorizationRule` Submodule <a name="`servicebusNamespaceAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceAuthorizationRule <a name="ServicebusNamespaceAuthorizationRule" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule azurerm_servicebus_namespace_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceAuthorizationRule(Construct Scope, string Id, ServicebusNamespaceAuthorizationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig">ServicebusNamespaceAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig">ServicebusNamespaceAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetListen">ResetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetManage">ResetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetSend">ResetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicebusNamespaceAuthorizationRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts">ServicebusNamespaceAuthorizationRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetListen` <a name="ResetListen" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetListen"></a>

```csharp
private void ResetListen()
```

##### `ResetManage` <a name="ResetManage" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetManage"></a>

```csharp
private void ResetManage()
```

##### `ResetSend` <a name="ResetSend" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetSend"></a>

```csharp
private void ResetSend()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusNamespaceAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusNamespaceAuthorizationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusNamespaceAuthorizationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusNamespaceAuthorizationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusNamespaceAuthorizationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServicebusNamespaceAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusNamespaceAuthorizationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusNamespaceAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusNamespaceAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.primaryConnectionStringAlias">PrimaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.secondaryConnectionStringAlias">SecondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference">ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.listenInput">ListenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.manageInput">ManageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.sendInput">SendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.listen">Listen</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.manage">Manage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.send">Send</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryConnectionStringAlias`<sup>Required</sup> <a name="PrimaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.primaryConnectionStringAlias"></a>

```csharp
public string PrimaryConnectionStringAlias { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryConnectionStringAlias`<sup>Required</sup> <a name="SecondaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```csharp
public string SecondaryConnectionStringAlias { get; }
```

- *Type:* string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.timeouts"></a>

```csharp
public ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference">ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenInput`<sup>Optional</sup> <a name="ListenInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.listenInput"></a>

```csharp
public object ListenInput { get; }
```

- *Type:* object

---

##### `ManageInput`<sup>Optional</sup> <a name="ManageInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.manageInput"></a>

```csharp
public object ManageInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `SendInput`<sup>Optional</sup> <a name="SendInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.sendInput"></a>

```csharp
public object SendInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Listen`<sup>Required</sup> <a name="Listen" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.listen"></a>

```csharp
public object Listen { get; }
```

- *Type:* object

---

##### `Manage`<sup>Required</sup> <a name="Manage" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.manage"></a>

```csharp
public object Manage { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `Send`<sup>Required</sup> <a name="Send" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.send"></a>

```csharp
public object Send { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceAuthorizationRuleConfig <a name="ServicebusNamespaceAuthorizationRuleConfig" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceAuthorizationRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NamespaceId,
    string Id = null,
    object Listen = null,
    object Manage = null,
    object Send = null,
    ServicebusNamespaceAuthorizationRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#name ServicebusNamespaceAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#namespace_id ServicebusNamespaceAuthorizationRule#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#id ServicebusNamespaceAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.listen">Listen</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#listen ServicebusNamespaceAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.manage">Manage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#manage ServicebusNamespaceAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.send">Send</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#send ServicebusNamespaceAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts">ServicebusNamespaceAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#name ServicebusNamespaceAuthorizationRule#name}.

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#namespace_id ServicebusNamespaceAuthorizationRule#namespace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#id ServicebusNamespaceAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Listen`<sup>Optional</sup> <a name="Listen" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.listen"></a>

```csharp
public object Listen { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#listen ServicebusNamespaceAuthorizationRule#listen}.

---

##### `Manage`<sup>Optional</sup> <a name="Manage" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.manage"></a>

```csharp
public object Manage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#manage ServicebusNamespaceAuthorizationRule#manage}.

---

##### `Send`<sup>Optional</sup> <a name="Send" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.send"></a>

```csharp
public object Send { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#send ServicebusNamespaceAuthorizationRule#send}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleConfig.property.timeouts"></a>

```csharp
public ServicebusNamespaceAuthorizationRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts">ServicebusNamespaceAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#timeouts ServicebusNamespaceAuthorizationRule#timeouts}

---

### ServicebusNamespaceAuthorizationRuleTimeouts <a name="ServicebusNamespaceAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceAuthorizationRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#create ServicebusNamespaceAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#delete ServicebusNamespaceAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#read ServicebusNamespaceAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#update ServicebusNamespaceAuthorizationRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#create ServicebusNamespaceAuthorizationRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#delete ServicebusNamespaceAuthorizationRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#read ServicebusNamespaceAuthorizationRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/servicebus_namespace_authorization_rule#update ServicebusNamespaceAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference <a name="ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespaceAuthorizationRule.ServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



