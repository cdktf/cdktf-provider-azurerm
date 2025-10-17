# `eventgridPartnerNamespace` Submodule <a name="`eventgridPartnerNamespace` Submodule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridPartnerNamespace <a name="EventgridPartnerNamespace" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace azurerm_eventgrid_partner_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridPartnerNamespace(Construct Scope, string Id, EventgridPartnerNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig">EventgridPartnerNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig">EventgridPartnerNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putInboundIpRule">PutInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetInboundIpRule">ResetInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetLocalAuthenticationEnabled">ResetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPartnerTopicRoutingMode">ResetPartnerTopicRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPublicNetworkAccess">ResetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInboundIpRule` <a name="PutInboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putInboundIpRule"></a>

```csharp
private void PutInboundIpRule(IResolvable|EventgridPartnerNamespaceInboundIpRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putInboundIpRule.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts"></a>

```csharp
private void PutTimeouts(EventgridPartnerNamespaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInboundIpRule` <a name="ResetInboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetInboundIpRule"></a>

```csharp
private void ResetInboundIpRule()
```

##### `ResetLocalAuthenticationEnabled` <a name="ResetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetLocalAuthenticationEnabled"></a>

```csharp
private void ResetLocalAuthenticationEnabled()
```

##### `ResetPartnerTopicRoutingMode` <a name="ResetPartnerTopicRoutingMode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPartnerTopicRoutingMode"></a>

```csharp
private void ResetPartnerTopicRoutingMode()
```

##### `ResetPublicNetworkAccess` <a name="ResetPublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPublicNetworkAccess"></a>

```csharp
private void ResetPublicNetworkAccess()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventgridPartnerNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridPartnerNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridPartnerNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridPartnerNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridPartnerNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventgridPartnerNamespace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventgridPartnerNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventgridPartnerNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventgridPartnerNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRule">InboundIpRule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList">EventgridPartnerNamespaceInboundIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference">EventgridPartnerNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRuleInput">InboundIpRuleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabledInput">LocalAuthenticationEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationIdInput">PartnerRegistrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingModeInput">PartnerTopicRoutingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccessInput">PublicNetworkAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationId">PartnerRegistrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingMode">PartnerTopicRoutingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InboundIpRule`<sup>Required</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRule"></a>

```csharp
public EventgridPartnerNamespaceInboundIpRuleList InboundIpRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList">EventgridPartnerNamespaceInboundIpRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeouts"></a>

```csharp
public EventgridPartnerNamespaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference">EventgridPartnerNamespaceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InboundIpRuleInput`<sup>Optional</sup> <a name="InboundIpRuleInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRuleInput"></a>

```csharp
public IResolvable|EventgridPartnerNamespaceInboundIpRule[] InboundIpRuleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>[]

---

##### `LocalAuthenticationEnabledInput`<sup>Optional</sup> <a name="LocalAuthenticationEnabledInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabledInput"></a>

```csharp
public bool|IResolvable LocalAuthenticationEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartnerRegistrationIdInput`<sup>Optional</sup> <a name="PartnerRegistrationIdInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationIdInput"></a>

```csharp
public string PartnerRegistrationIdInput { get; }
```

- *Type:* string

---

##### `PartnerTopicRoutingModeInput`<sup>Optional</sup> <a name="PartnerTopicRoutingModeInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingModeInput"></a>

```csharp
public string PartnerTopicRoutingModeInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessInput`<sup>Optional</sup> <a name="PublicNetworkAccessInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccessInput"></a>

```csharp
public string PublicNetworkAccessInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeoutsInput"></a>

```csharp
public IResolvable|EventgridPartnerNamespaceTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalAuthenticationEnabled`<sup>Required</sup> <a name="LocalAuthenticationEnabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabled"></a>

```csharp
public bool|IResolvable LocalAuthenticationEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartnerRegistrationId`<sup>Required</sup> <a name="PartnerRegistrationId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationId"></a>

```csharp
public string PartnerRegistrationId { get; }
```

- *Type:* string

---

##### `PartnerTopicRoutingMode`<sup>Required</sup> <a name="PartnerTopicRoutingMode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingMode"></a>

```csharp
public string PartnerTopicRoutingMode { get; }
```

- *Type:* string

---

##### `PublicNetworkAccess`<sup>Required</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccess"></a>

```csharp
public string PublicNetworkAccess { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridPartnerNamespaceConfig <a name="EventgridPartnerNamespaceConfig" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridPartnerNamespaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string PartnerRegistrationId,
    string ResourceGroupName,
    string Id = null,
    IResolvable|EventgridPartnerNamespaceInboundIpRule[] InboundIpRule = null,
    bool|IResolvable LocalAuthenticationEnabled = null,
    string PartnerTopicRoutingMode = null,
    string PublicNetworkAccess = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    EventgridPartnerNamespaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#location EventgridPartnerNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#name EventgridPartnerNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerRegistrationId">PartnerRegistrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#partner_registration_id EventgridPartnerNamespace#partner_registration_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#resource_group_name EventgridPartnerNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#id EventgridPartnerNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.inboundIpRule">InboundIpRule</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>[]</code> | inbound_ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#local_authentication_enabled EventgridPartnerNamespace#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerTopicRoutingMode">PartnerTopicRoutingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#partner_topic_routing_mode EventgridPartnerNamespace#partner_topic_routing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#public_network_access EventgridPartnerNamespace#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#tags EventgridPartnerNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#location EventgridPartnerNamespace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#name EventgridPartnerNamespace#name}.

---

##### `PartnerRegistrationId`<sup>Required</sup> <a name="PartnerRegistrationId" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerRegistrationId"></a>

```csharp
public string PartnerRegistrationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#partner_registration_id EventgridPartnerNamespace#partner_registration_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#resource_group_name EventgridPartnerNamespace#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#id EventgridPartnerNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundIpRule`<sup>Optional</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.inboundIpRule"></a>

```csharp
public IResolvable|EventgridPartnerNamespaceInboundIpRule[] InboundIpRule { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>[]

inbound_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#inbound_ip_rule EventgridPartnerNamespace#inbound_ip_rule}

---

##### `LocalAuthenticationEnabled`<sup>Optional</sup> <a name="LocalAuthenticationEnabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.localAuthenticationEnabled"></a>

```csharp
public bool|IResolvable LocalAuthenticationEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#local_authentication_enabled EventgridPartnerNamespace#local_authentication_enabled}.

---

##### `PartnerTopicRoutingMode`<sup>Optional</sup> <a name="PartnerTopicRoutingMode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerTopicRoutingMode"></a>

```csharp
public string PartnerTopicRoutingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#partner_topic_routing_mode EventgridPartnerNamespace#partner_topic_routing_mode}.

---

##### `PublicNetworkAccess`<sup>Optional</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.publicNetworkAccess"></a>

```csharp
public string PublicNetworkAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#public_network_access EventgridPartnerNamespace#public_network_access}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#tags EventgridPartnerNamespace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.timeouts"></a>

```csharp
public EventgridPartnerNamespaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#timeouts EventgridPartnerNamespace#timeouts}

---

### EventgridPartnerNamespaceInboundIpRule <a name="EventgridPartnerNamespaceInboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridPartnerNamespaceInboundIpRule {
    string IpMask,
    string Action = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.ipMask">IpMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#ip_mask EventgridPartnerNamespace#ip_mask}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#action EventgridPartnerNamespace#action}. |

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.ipMask"></a>

```csharp
public string IpMask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#ip_mask EventgridPartnerNamespace#ip_mask}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#action EventgridPartnerNamespace#action}.

---

### EventgridPartnerNamespaceTimeouts <a name="EventgridPartnerNamespaceTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridPartnerNamespaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#create EventgridPartnerNamespace#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#delete EventgridPartnerNamespace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#read EventgridPartnerNamespace#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#update EventgridPartnerNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#create EventgridPartnerNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#delete EventgridPartnerNamespace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#read EventgridPartnerNamespace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/eventgrid_partner_namespace#update EventgridPartnerNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridPartnerNamespaceInboundIpRuleList <a name="EventgridPartnerNamespaceInboundIpRuleList" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridPartnerNamespaceInboundIpRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.get"></a>

```csharp
private EventgridPartnerNamespaceInboundIpRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.internalValue"></a>

```csharp
public IResolvable|EventgridPartnerNamespaceInboundIpRule[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>[]

---


### EventgridPartnerNamespaceInboundIpRuleOutputReference <a name="EventgridPartnerNamespaceInboundIpRuleOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridPartnerNamespaceInboundIpRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMaskInput">IpMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMask">IpMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IpMaskInput`<sup>Optional</sup> <a name="IpMaskInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMaskInput"></a>

```csharp
public string IpMaskInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMask"></a>

```csharp
public string IpMask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventgridPartnerNamespaceInboundIpRule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>

---


### EventgridPartnerNamespaceTimeoutsOutputReference <a name="EventgridPartnerNamespaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridPartnerNamespaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventgridPartnerNamespaceTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>

---



