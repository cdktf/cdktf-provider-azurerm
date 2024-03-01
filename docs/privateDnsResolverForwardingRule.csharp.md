# `privateDnsResolverForwardingRule` Submodule <a name="`privateDnsResolverForwardingRule` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverForwardingRule <a name="PrivateDnsResolverForwardingRule" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule azurerm_private_dns_resolver_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverForwardingRule(Construct Scope, string Id, PrivateDnsResolverForwardingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig">PrivateDnsResolverForwardingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig">PrivateDnsResolverForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers">PutTargetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetDnsServers` <a name="PutTargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers"></a>

```csharp
private void PutTargetDnsServers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivateDnsResolverForwardingRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverForwardingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverForwardingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverForwardingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverForwardingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateDnsResolverForwardingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateDnsResolverForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServers">TargetDnsServers</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList">PrivateDnsResolverForwardingRuleTargetDnsServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference">PrivateDnsResolverForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput">DnsForwardingRulesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServersInput">TargetDnsServersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId">DnsForwardingRulesetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TargetDnsServers`<sup>Required</sup> <a name="TargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServers"></a>

```csharp
public PrivateDnsResolverForwardingRuleTargetDnsServersList TargetDnsServers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList">PrivateDnsResolverForwardingRuleTargetDnsServersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeouts"></a>

```csharp
public PrivateDnsResolverForwardingRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference">PrivateDnsResolverForwardingRuleTimeoutsOutputReference</a>

---

##### `DnsForwardingRulesetIdInput`<sup>Optional</sup> <a name="DnsForwardingRulesetIdInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput"></a>

```csharp
public string DnsForwardingRulesetIdInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetDnsServersInput`<sup>Optional</sup> <a name="TargetDnsServersInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServersInput"></a>

```csharp
public object TargetDnsServersInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DnsForwardingRulesetId`<sup>Required</sup> <a name="DnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId"></a>

```csharp
public string DnsForwardingRulesetId { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverForwardingRuleConfig <a name="PrivateDnsResolverForwardingRuleConfig" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverForwardingRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DnsForwardingRulesetId,
    string DomainName,
    string Name,
    object TargetDnsServers,
    object Enabled = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    PrivateDnsResolverForwardingRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId">DnsForwardingRulesetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.targetDnsServers">TargetDnsServers</a></code> | <code>object</code> | target_dns_servers block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DnsForwardingRulesetId`<sup>Required</sup> <a name="DnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId"></a>

```csharp
public string DnsForwardingRulesetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}.

---

##### `TargetDnsServers`<sup>Required</sup> <a name="TargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.targetDnsServers"></a>

```csharp
public object TargetDnsServers { get; set; }
```

- *Type:* object

target_dns_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#target_dns_servers PrivateDnsResolverForwardingRule#target_dns_servers}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.timeouts"></a>

```csharp
public PrivateDnsResolverForwardingRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#timeouts PrivateDnsResolverForwardingRule#timeouts}

---

### PrivateDnsResolverForwardingRuleTargetDnsServers <a name="PrivateDnsResolverForwardingRuleTargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverForwardingRuleTargetDnsServers {
    string IpAddress,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#ip_address PrivateDnsResolverForwardingRule#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#port PrivateDnsResolverForwardingRule#port}. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#ip_address PrivateDnsResolverForwardingRule#ip_address}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#port PrivateDnsResolverForwardingRule#port}.

---

### PrivateDnsResolverForwardingRuleTimeouts <a name="PrivateDnsResolverForwardingRuleTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverForwardingRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#create PrivateDnsResolverForwardingRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#delete PrivateDnsResolverForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#read PrivateDnsResolverForwardingRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#update PrivateDnsResolverForwardingRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#create PrivateDnsResolverForwardingRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#delete PrivateDnsResolverForwardingRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#read PrivateDnsResolverForwardingRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/private_dns_resolver_forwarding_rule#update PrivateDnsResolverForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverForwardingRuleTargetDnsServersList <a name="PrivateDnsResolverForwardingRuleTargetDnsServersList" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverForwardingRuleTargetDnsServersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get"></a>

```csharp
private PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference <a name="PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivateDnsResolverForwardingRuleTimeoutsOutputReference <a name="PrivateDnsResolverForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverForwardingRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



